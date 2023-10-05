import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
}
body{
    background: ${(props) => props.theme.bgColor};
}
`;
