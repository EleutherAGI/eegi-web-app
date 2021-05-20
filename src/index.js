
import ReactDom from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/theme";
import Navigation from "./views/Navigation";

ReactDom.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <Navigation />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root"));
