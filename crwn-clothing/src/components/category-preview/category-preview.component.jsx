import { Link } from "react-router-dom";

import ProductCard from "../product-card/productCard.component";

import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, inx) => inx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;