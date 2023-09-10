import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ProductCards from "../ProductCards";

const Products = () => {
  const [product, setProduct] = useState("");
  const [limit, setLimit] = useState(8);
  const [search, setSearch] = useState();
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
  const searchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setProduct(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    search && searchData();
  }, [search]);

  return (
    <div className="flex flex-col bg-yellow-200 gap-2">
      <div className="flex justify-between p-2">
        <p className="text-center font-bold text-lg ">See all deals</p>
        <TextField
          name="search"
          value={search}
          label="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 overflow-auto hide-scroll whitespace-nowrap scroll-smooth gap-5">
        {product?.products?.map((item) => {
          return <ProductCards key={item.id} productData={item} />;
        })}
      </div>
      <div className="flex flex-col items-end">
        <Button onClick={() => setLimit(limit + 8)}>See More</Button>
      </div>
    </div>
  );
};

export default Products;
