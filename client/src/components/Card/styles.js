import styled from "@emotion/styled";

export const CardComponent = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;

    .image {
        width: 100%;
        height: 400px;
        overflow: hidden;
        position: relative;

        &:hover {
            .secondImg {
                z-index: 2;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        }

        .mainImg {
            z-index: 1;
        }

        span {
            position: absolute;
            top: 5px;
            left: 5px;
            background-color: white;
            color: teal;
            z-index: 3;
            font-weight: 500;
            font-size: 12px;
        }
    }

    h2 {
        font-size: 16px;
        font-weight: 400;
    }

    .prices {
        display: flex;
        flex-direction: row;
        gap: 20px;

        h3 {
            font-size: 18px;
            font-weight: 600;
            
            &:first-of-type {
                font-weight: 400;
                color: gray;
                text-decoration: line-through;
            }
        }
    }
`;
