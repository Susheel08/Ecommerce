import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-300 p-5">
      <div className="flex justify-center items-center gap-3">
        <Google className="bg-white rounded" />
        <Facebook className="bg-white rounded" />
        <Twitter className="bg-white rounded" />
        <LinkedIn className="bg-white rounded " />
      </div>
      <div className="text-center text-xl font-semibold pt-5">
        <p>Shipping Policy Collection Policy </p>
        <p>©2023 Shopping Group Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
