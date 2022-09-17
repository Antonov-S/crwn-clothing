import Button from "../button/button.component";

import "./cart-dropdawn.styles.scss";

const CardDropdawn = () => {
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-items">
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
};

export default CardDropdawn;