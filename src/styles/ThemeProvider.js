import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#951434",
        primaryVariant: "#b20a2c",
        lightBg: "whitesmoke",
        greyBg: "#dfe6e9",
        whiteBg: "white",
        black: "black",
    }
};

function Theme({ children }){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;