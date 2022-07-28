import { Box } from "@mui/system";
import { useState } from "react";
import NavBar from "./NavBar.jsx";
import ResultsBox from "./ResultsBox.jsx";

const Home = () => {

 return (
  <Box minHeight='100vh' pb={3} bgcolor="#d8ddde" display='flex' flexDirection='column' alignItems='center'  >
   <NavBar />
   <ResultsBox />
  </Box>
 );
};

export default Home;
