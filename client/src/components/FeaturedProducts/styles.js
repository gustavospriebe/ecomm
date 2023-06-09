import styled from "@emotion/styled";

export const FeaturedProductsComponent = styled.div`
    /* display: flex; */
    margin: 100px 200px;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        h1 {
            flex: 2;
        }

        p {
            flex: 3;
            color: gray;
        }
    }
    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
    }
`;
