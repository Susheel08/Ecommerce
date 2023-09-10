import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [image, setImage] = useState();
  const productDetails = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setDetail(res));
  };
  useEffect(() => {
    productDetails();
  }, [id]);
  useEffect(() => {
    setImage(detail?.images?.[0]);
  }, [detail]);
  console.log(detail, "detail");
  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex border-2 bg-gray-300 border-black rounded-2xl p-5 gap-5">
        <div className="grid grid-cols-1  py-5">
          {detail?.images?.map((i) => {
            return (
              <img
                src={i}
                alt=""
                className="h-24 w-24 rounded-3xl"
                onClick={() => setImage(i)}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 p-2">
          <img src={image} alt="" className="h-96 w-96 rounded-2xl" />{" "}
          <p>Model : {detail.title}</p>
          <div className="flex  gap-2">
            <p>Price : &#x24;{detail.price}</p>
            <del>&#x24;.5785.99</del>
          </div>
          <p>Category : {detail.category}</p>
          <Rating readOnly value={detail.rating || ""} />
          <button className="border-2 rounded-xl bg-gray-400 hover:bg-slate-800 w-52">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
