import { useNavigate } from "react-router-dom";

import {
    BackroundImage,
    Body,
    DirectoryItemContainer
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackroundImage
                imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Naw</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;