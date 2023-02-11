import { useState, useEffect } from "react";
import { axios } from 'axios';
import { makeRequest } from './../../makeRequest';

const useFetch = (url) => {

  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await makeRequest.get(url);
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error(error);
        setError(true)
      }
      setLoading(false)
    };
    fetchData();
  }, [url]);
return {products,loading,error}
}

export default useFetch;
