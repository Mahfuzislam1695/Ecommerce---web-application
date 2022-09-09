import React from "react";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";
import { Container } from "./Products.style";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
