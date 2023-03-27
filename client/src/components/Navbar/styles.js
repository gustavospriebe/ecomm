import styled from "styled-components";

export const NavbarComponent = styled.header`
    height: 80px;

    .wrapper {
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 25px;
        }

        .center {
            font-size: 30px;
            letter-spacing: 2px;
        }

        .item {
            display: flex;
            align-items: center;
            font-size: 18px;
        }

        .icons {
            display: flex;
            gap: 15px;
            color: #777;
            cursor: pointer;

            .cartIcon {
                position: relative;

                span {
                    font-size: 12px;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    background-color: #2879fe;
                    color: #fff;
                    position: absolute;
                    right: -10px;
                    top: -10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
`;
