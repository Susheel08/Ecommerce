import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCards3 = ({ productData }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() =>
          navigate(
            `/product/${productData.image}/${productData.id}/${productData.name}/${productData.price}`,
            {
              state: {
                image: productData.image,
                name: productData.name,
                price: productData.price,
              },
            }
          )
        }
        className="rounded-xl p-2 hover:bg-yellow-400 hover:shadow-yellow-900 hover:shadow-xl"
      >
        {/* cart */}
        <div className="flex justify-between bg-white rounded-lg  p-2">
          <div className=" flex flex-col gap-5 items-start px-2">
            <span className="font-bold text-xl">
              {productData.title.slice(0, 10)}
            </span>

            <p className="font-bold text-2xl">${productData.price}</p>
            <button className="rounded-full px-1 border-2 h-5  text-xs">
              Shop Now
            </button>
          </div>
          <img
            src={productData.thumbnail}
            alt=""
            className=" w-28 h-32 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCards3;
