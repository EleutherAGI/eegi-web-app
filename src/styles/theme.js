import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    colors: {
        eleuther: {
            lightBlue: "#00BBFF",
            black: "#000000",
            darkBlue: "#0C7489",
            darkGrey: "#4A4A4A"
        }
    },
    components: {
        Link: {
            baseStyle: {
                textDecoration: "none",
                _hover: {
                    textDecoration: "none"
                }
            },
            variants: {
                "text-link": {
                    color: "#00BBFF",
                    textDecoration: "underline"
                }
            }
        },
        Button: {
            variants: {
                outline: {
                    color: "#00BBFF",
                    borderColor: "#00BBFF",
                    textDecoration: "none"
                }
            },
            defaultProps: {
                variant: "outline"
            }
        }
    }
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
