import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import flag from "../../assets/img/en.png";
import { Link } from "react-router-dom";
import { NavbarComponent } from "./styles";
import { useState } from "react";
import { Cart } from "../Cart";
import { useSelector } from "react-redux";

export function Navbar() {
    const [openCart, setOpenCart] = useState(false);

    const products = useSelector((state) => state.cart.products);

    return (
        <NavbarComponent>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={flag} alt="en" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/2">
                            Men
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/3">
                            Children
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        GSP Store
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="products/1">
                            Homepage
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="products/1">
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div
                            className="cartIcon"
                            onClick={() => setOpenCart(!openCart)}
                        >
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart />}
        </NavbarComponent>
    );
}
