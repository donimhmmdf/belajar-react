import React, { useState, useEffect } from "react";
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
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
