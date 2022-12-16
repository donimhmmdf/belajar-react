import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product() {
  const { id } = useParams();
  const url = `https://639c39cb16d1763ab1430509.mockapi.io/Products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

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
