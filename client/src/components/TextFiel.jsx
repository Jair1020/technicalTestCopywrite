import { TextField } from "@mui/material";


function TextFiel() {
  return (
    <TextField
      id="outlined-basic"
      label="Insert Text"
      variant="filled"
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