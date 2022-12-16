import React from "react";

import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  const url = `https://639c39cb16d1763ab1430509.mockapi.io/Products?page=1&limit=10`;
  let products = useAxiosGet(url);
  let content = null;
  if (products.error) {
    content = (
      <span>There was an error please refresh or try again later...</span>
    );
  }

  if (products.loading) {
    content = <Loader />;
  }
  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }
  return (
    <div>
      <h2 className="font-bold text-2xl">Best Sellers</h2>
      <div className="md:flex flex-wrap md:-mx-3">{content}</div>
    </div>
  );
}
export default Home;
