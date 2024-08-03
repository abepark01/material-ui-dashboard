import { Typography } from "@mui/material";

export default function StatCardValue({
  value,
}: {
  value: number | undefined;
}) {
  return <Typography sx={{ fontWeight: "bold" }}>{value}</Typography>;
}
