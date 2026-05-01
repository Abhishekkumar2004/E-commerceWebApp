import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCram from "../Components/BreadCrams/BreadCram";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { AllProduct } = useContext(ShopContext);
  const { productId } = useParams();

  const product = AllProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCram product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};

export default Product;
