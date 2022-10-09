export const fetchProducts = async () => {
  const res = await fetch("/api/v1/products");
  const products = await res.json();
  return products;
};

export const productById = async (id) => {
  const res = await fetch(`/api/v1/products/${id}`);
  const product = await res.json();

  return product;
};
