import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },  
  components: {
    Link: {      
      baseStyle: {
        color: "#0bf"
      },
    },
    Button: {
      variants: {
        outline: {
          color: "#0bf",
          borderColor: "#0bf"
        }
      },
      defaultProps: {
        variant: "outline"
      }
    }
  },
}

// 3. extend the theme
const theme = extendTheme(config)

export default theme