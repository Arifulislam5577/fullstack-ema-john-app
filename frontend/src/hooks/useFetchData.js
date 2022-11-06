import { useEffect, useState } from "react";

const useFetchData = (category, page, keyword) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  let url = `/api/v1/products?page=${page}&keyword=${keyword}`;

  if (category) {
    url = `/api/v1/products?category=${category}`;
  }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        setError("");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchProduct();
  }, [url, category, page, keyword]);

  return {
    loading,
    data,
    error,
  };
};

export default useFetchData;
