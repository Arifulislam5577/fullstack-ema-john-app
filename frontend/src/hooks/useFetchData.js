import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

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

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    loading,
    data,
    error,
  };
};

export default useFetchData;
