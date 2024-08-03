import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface SimpleStatCardContentProps {
  value: number | undefined;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export function SimpleStatCardContent({
  value,
  Icon,
}: SimpleStatCardContentProps) {
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        color: "textSecondary",
      }}
    >
      <Icon sx={{ color: "text.secondary" }} />
      <Typography>{value}</Typography>
    </Box>
  );
}
