import { Box } from "@mui/system";
import NavBar from "./NavBar.jsx";
import ResultsBox from "./ResultsBox.jsx";

const Home = () => {
 return (
  <Box minHeight='100vh' pb={3} bgcolor="#d8ddde">
   <NavBar />
   <ResultsBox />
  </Box>
 );
};

export default Home;
