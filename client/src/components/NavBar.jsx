import ButtonSend from "./ButtonSend.jsx";
import TextFiel from "./TextFiel.jsx";
import { Box } from "@mui/system";


function NavBar() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    bgcolor="#93b5c6"
    width="100%"
			>
				<TextFiel />
				<ButtonSend />
			</Box>
  )
}

export default NavBar