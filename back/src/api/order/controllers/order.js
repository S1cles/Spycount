// 'use strict';
// const stripe = require('stripe')(process.env.STRIPE_KEY)
// const express = require('express');
// const app = express()
// // app.use = (express.static('public'))
// /**
//  * order controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order', ({ strapi }) => ({
//     async create(ctx) {
//         const { products } = ctx.request.body;

//        






// const lineItems = await Promise.all(
//             products.map(async (product) => {
//                 const item = await strapi
//                     .service("api::product.product")
//                     .findOne(product.id)
//                 return {
//                     price_data: {
//                         currency: "PLN",
//                         product_data: {
//                             name: product.title,
//                         },
//                         unit_amount: product.price * 100
//                     },
//                     quantity: product.quantity,
//                 }
//             }
//             )
//         )
//         try {
//             const session = await stripe.checkout.sessions.create({
//                 mode: "payment",
//                 success_url: `${process.env.CLIENT_URL}?success=true`,
//                 cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
//                 line_items: lineItems,
//                 shipping_address_collection: { allowed_countries: ["US", "PL", "CA"] },
//                 payment_method_types: ["card"],
//                 automatic_tax: { enabled: true },
//             });
//             await strapi.service("api::order:order").create({
//                 data: {
//                     products:products, 
//                     stripeId: session.id,
//                 }
//             })
//             return { stripeSession: session }
//         } catch (err) {
//             ctx.response.status = 500;
//             return err
//         }
//     }
// }));



("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "pln",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['US','PL', 'CA']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"?success=true",
        cancel_url: process.env.CLIENT_URL+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));