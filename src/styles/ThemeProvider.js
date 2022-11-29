import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#951434",
        primaryVariant: "#b20a2c",
        lightBg: "whitesmoke",
        greyBg: "#dfe6e9",
        whiteBg: "white",
        black: "black",
        cardTitleBg: "rgba( 149, 20, 52, 0.65 )",
        cardBg: "rgba( 149, 20, 52, 0.30 )",
        cardShadow: "rgba( 159, 20, 52, 0.37 )",
    }
};

function Theme({ children }){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;