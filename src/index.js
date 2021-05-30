import ReactDom from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/theme";
import App from "./App";

ReactDom.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
