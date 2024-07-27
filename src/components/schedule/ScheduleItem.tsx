import { Box, Color } from "@mui/material";
import {
  grey,
  pink,
  purple,
  green,
  teal,
  red,
  brown,
} from "@mui/material/colors";

const ScheduleItem = ({
  title,
  color = "grey",
}: {
  title: string;
  color?: "grey" | "purple" | "green" | "teal" | "red" | "brown" | "pink";
}) => {
  let colorObj: Color = grey;
  switch (color) {
    case "grey":
      colorObj = grey;
      break;
    case "purple":
      colorObj = purple;
      break;
    case "pink":
      colorObj = pink;
      break;
    case "green":
      colorObj = green;
      break;
    case "teal":
      colorObj = teal;
      break;
    case "brown":
      colorObj = brown;
      break;
    default:
      colorObj = grey;
  }
  return (
    <Box
      sx={{
        whiteSpace: "nowrap",
        padding: 0.5,
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: colorObj[700],
        bgcolor: colorObj[50],
        borderLeftColor: colorObj[500],
        borderLeftStyle: "solid",
      }}
      title={title}
    >
      {title}
    </Box>
  );
};

export default ScheduleItem;
