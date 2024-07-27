import styled from "@emotion/styled";
import { TableCell } from "@mui/material";
import { grey } from "@mui/material/colors";

const ScheduleTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: `solid 1px ${grey[300]}`,
}));

export default ScheduleTableCell;
