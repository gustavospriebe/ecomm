import styled from "styled-components";

export const FooterComponent = styled.footer`
    margin: 100px;

    .top {
        display: flex;
        gap: 50px;

        .item {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: justify;
            font-size: 16px;
        }

        h1 {
            font-size: 22px;
            font-weight: 600;
            color: #555;
        }

        span {
            color: gray;
        }
    }

    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;

        .left {
            display: flex;
            align-items: center;

            .logo {
                color: #2879fe;
                font-weight: bold;
                font-size: 24px;
            }

            .copyright {
                margin-left: 20px;
                font-size: 12px;
                color: gray;
            }
        }

        .right {
            img {
                height: 50px;
            }
        }
    }
`;
