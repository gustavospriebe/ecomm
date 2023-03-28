import styled from "@emotion/styled";

export const CartComponent = styled.div`
    position: absolute;
    right: 20px;
    top: 80px;
    z-index: 999;
    background-color: white;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);

    h1 {
        margin-bottom: 30px;
        color: gray;
        font-weight: 400;
        font-size: 24px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
        img {
            width: 80px;
            height: 100px;
            object-fit: cover;
        }

        .details {
            h1 {
                font-size: 18px;
                font-weight: 500;
            }

            p {
                color: gray;
                margin-bottom: 10px;
                font-size: 14px;
            }

            .price {
                color: #2879fe;
            }
        }

        .delete {
            color: red;
            font-size: 30px;
            cursor: pointer;
        }
    }

    .total {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 20px;
    }

    button {
        width: 250px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        cursor: pointer;
        border: none;
        background-color: #2879fe;
        color: white;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .reset {
        color: red;
        font-size: 12px;
        cursor: pointer;
    }
`;
