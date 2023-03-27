import styled from "@emotion/styled";

export const ProductComponent = styled.div`
    padding: 20px 50px;
    display: flex;
    gap: 50px;

    .left {
        flex: 1;
        display: flex;
        gap: 20px;
        .images {
            flex: 1;

            img {
                width: 100%;
                height: 150px;
                object-fit: cover;
                cursor: pointer;
                margin-bottom: 10px;
            }
        }
        .mainImg {
            flex: 5;

            img {
                width: 100%;
                max-height: 800px;
                object-fit: cover;
            }
        }
    }
    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 30px;

        .price {
            font-size: 30px;
            color: #2879fe;
            font-weight: 500;
        }

        p {
            font-size: 18px;
            font-weight: 300;
            text-align: justify;
        }

        .quantity {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
            }
        }

        .add {
            width: 250px;
            padding: 10px;
            background-color: #2879fe;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            cursor: pointer;
            border: none;
            font-weight: 500;
        }

        .links {
            display: flex;
            gap: 20px;

            .item {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #2879fe;
                font-size: 14px;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: gray;
            font-size: 14px;
            margin-top: 30px;

            hr {
                width: 200px;
                border: 1px solid rgb(238, 237, 237);
            }
        }

        hr {
            border: 1px solid rgb(238, 237, 237);
        }
    }
`;
