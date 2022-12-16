import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  const { id } = useParams();
  const url = `https://639c39cb16d1763ab1430509.mockapi.io/Products/${id}`;
  let product = useAxiosGet(url);
  let content = null;

  if (product.error) {
    content = (
      <span>There was an error please refresh or try again later...</span>
    );
  }

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div className="mb-36">
        <h2 className="font-bold text-2xl mb-3">{product.data.name}</h2>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="text-xl mb-3 font-bold">{product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}
export default Product;
