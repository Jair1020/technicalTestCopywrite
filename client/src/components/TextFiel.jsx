import { TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { setText, textSelector } from "../redux/slices/textSlice";


function TextFiel() {
  const { text } = useSelector (textSelector);
  
  const dispatch = useDispatch();


   const onHandlerChange = (event) => {
    dispatch (setText (event.target.value));
  }
  return (
    <TextField
      id="outlined-basic"
      label="Insert Text"
      variant="filled"
      onChange={onHandlerChange}
      value={text}
      sx={{
        background: "white",
        borderRadius: "12px",
        width: "50%",
        margin: "10px",
      }}
    />
  )
}

export default TextFiel