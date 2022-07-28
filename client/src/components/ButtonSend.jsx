import Button from "@mui/material/Button";
import { reverseText } from "../redux/actions/reverseText";
import { useDispatch, useSelector} from 'react-redux'
import { setText, textSelector } from "../redux/slices/textSlice";


function ButtonSend() {
  const { text } = useSelector (textSelector);
  const dispatch = useDispatch();
  console.log(text);
  const onHandlerClick = () => {
    dispatch(reverseText(text));
    dispatch (setText (''));

  }

  return (
    <Button onClick={onHandlerClick}
    sx={{ width: 100, margin: "10px" }} variant="contained">
      Send
    </Button>
  );
}

export default ButtonSend;
