import React from "react";

const FallBackLoader = () => {
  return (
    <section className="fallback min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-500 ">Loading...</h1>
    </section>
  );
};

export default FallBackLoader;
