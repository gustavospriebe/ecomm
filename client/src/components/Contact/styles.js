import styled from "@emotion/styled";

export const ContactComponent = styled.div`
    background-color: #2879fe;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: center;

    .wrapper {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            padding: 10px;
            border: none;
            border-radius: 5px 0 0 5px;
        }

        button {
            padding: 10px;
            color: white;
            background: #333;
            border-radius: 0 5px 5px 0;
            border: none;
        }

        .icons {
            display: flex;
            gap: 10px;
            cursor: pointer;
        }
    }
`;
