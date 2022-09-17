import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdawn from "../../components/cart-dropdown/cart-dropdawn.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../components/context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/" >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop" >
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser} >SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth" >
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                <CardDropdawn />
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;