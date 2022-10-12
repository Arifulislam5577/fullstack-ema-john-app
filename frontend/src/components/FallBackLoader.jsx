import React from "react";

const FallBackLoader = () => {
  return (
    <section className="fallback min-h-screen flex items-center justify-center">
      <div className="spinner">
        <img src="images/spinner.svg" alt="spinner" />
      </div>
    </section>
  );
};

export default FallBackLoader;
