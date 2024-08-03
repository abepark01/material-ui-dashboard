import { Outbound } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

export interface StatCardDeltaProps {
  value: number | undefined;
  timeAgo: string;
}

export default function StatCardDelta({ value, timeAgo }: StatCardDeltaProps) {
  const theme = useTheme();
  const deltaFormatted = useMemo(() => {
    if (typeof value === "undefined") {
      return "-";
    }
    if (value > 0) {
      return `+${value}%`;
    } else if (value < 0) {
      return `-${value}%`;
    }
    return "0%";
  }, [value]);

  const deltaColor = useMemo(() => {
    if (typeof value === "undefined") {
      return theme.palette.secondary.main;
    }
    if (value > 0) {
      return theme.palette.success.main;
    } else if (value < 0) {
      return theme.palette.error.main;
    }
    return theme.palette.text.secondary;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          color: deltaColor,
        }}
      >
        <Outbound fontSize="small" />
        <Typography variant="body2">{deltaFormatted}</Typography>
      </Box>
      <Typography variant="body2">{timeAgo}</Typography>
    </Box>
  );
}
