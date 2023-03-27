import { FooterComponent } from "./styles";
import payment from "../../assets/img/payment.png";

export function Footer() {
    return (
        <FooterComponent>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae incidunt animi ex magnam minima asperiores ea
                        ipsum, esse ipsam quisquam neque ducimus a porro
                        provident. Iste voluptates fugit nam esse!
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae incidunt animi ex magnam minima asperiores ea
                        ipsum, esse ipsam quisquam neque ducimus a porro
                        provident. Iste voluptates fugit nam esse!
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">GSP Store</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src={payment} alt="payment" />
                </div>
            </div>
        </FooterComponent>
    );
}
