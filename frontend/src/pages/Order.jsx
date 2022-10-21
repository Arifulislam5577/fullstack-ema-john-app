import React, { useState } from "react";

const Order = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <section className=" py-5 z-0">
      <div className="container">
        <h1 className="text-3xl text-center my-5 bg-gray-200 p-4 font-bold">
          ORDER PAGE
        </h1>
      </div>
    </section>
  );
};

export default Order;
