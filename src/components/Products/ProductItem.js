import React from "react";
import { Circle, Icon, Image, Info, ItemContainer } from "./Products.style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const ProductItem = ({ item }) => {
  return (
    <ItemContainer>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </ItemContainer>
  );
};

export default ProductItem;
