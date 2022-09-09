import React from 'react';
import { Container } from './Category.style';
import CategoryItem from './CategoryItem';
import { categories } from "../../data";

const Category = () => {
    return (
        <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    );
};

export default Category;