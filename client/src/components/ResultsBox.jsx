import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { textSelector } from "../redux/slices/textSlice";
import stringifyNumber from "../helpers/NumToString";
import { Typography } from "@mui/material";

function ResultsBox() {
 const { textResponse } = useSelector(textSelector);
 const [text, setText] = useState({});
 useEffect(() => {
  let times = stringifyNumber(Object.keys(text).length + 1);
  textResponse.data && setText({ ...text, [times]: textResponse.data });
 }, [textResponse]);
 console.log(text);
 return (
  <Box
   sx={{
    marginInline: "10%",
    marginBlock: "5%",
    background: "#93b5c6",
    minHeight: 400,
    padding: 10,
    width: 'fit-content',
    borderRadius: "12px",
   }}
  >
   <Typography
   variant="h3" color="black" component="h2" minWidth='200px'
   >Results:</Typography>
   {Object.keys(text).length
    ? Object.keys(text).map((key) => (
       <Box
        key={key}
        display="flex"
        justifyContent="start"
        alignItems="center"
        marginBlock={2}
        gap={2}
       >
        <Typography variant="h5" color="textPrimary" component="h2" minWidth='200px'>
         {key} Text:{" "}
        </Typography>
        <Typography
         variant="h6"
         color="textsecondary"
         component="h3"
         bgcolor="white"
         p={1}
         borderRadius={2}
         key={key}
         minWidth='100px'
        >
         {text[key].reversedText}
        </Typography>
        {text[key].palindrome ? (
         <Typography
          variant="h6"
          color="textsecondary"
          component="h3"
          bgcolor="white"
          p={1}
          borderRadius={2}
          key={key}
         >
          Es palindrome
         </Typography>
        ) : null}
       </Box>
      ))
    : null}
  </Box>
 );
}

export default ResultsBox;
