import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCards2 from "../ProductCards2";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Products2 = () => {
  const [product, setProduct] = useState("");
  const [limit, setLimit] = useState(10);

  // get api
  const productList = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}&skip=10`
      );
      setProduct(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    productList();
  }, [limit]);

  return (
    <div className="flex justify-between items-center px-2">
      <ArrowBackIos
        onClick={() => setLimit(limit - 4)}
        className="bg-white rounded-full p-1"
      />
      <div className="flex overflow-x-scroll  hide-scroll overflow-auto scroll-smooth gap-5 ">
        {product?.products?.map((item) => {
          return <ProductCards2 key={item.id} productData={item} />;
        })}
      </div>
      <ArrowForwardIos
        onClick={() => setLimit(limit + 4)}
        className="bg-white rounded-full p-1"
      />
    </div>
  );
};

export default Products2;
