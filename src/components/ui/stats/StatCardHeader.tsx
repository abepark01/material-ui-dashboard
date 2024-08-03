import { Box, SvgIconTypeMap, Typography, useTheme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface StatCardHeaderProps {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export default function StatCardHeader({ title, Icon }: StatCardHeaderProps) {
  const theme = useTheme();
  const secondaryText = theme.palette.text.secondary;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: secondaryText,
      }}
    >
      {Icon && <Icon />}
      <Typography variant="body1" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Box>
  );
}
