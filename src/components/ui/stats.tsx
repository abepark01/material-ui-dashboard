import { Outbound } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  SvgIconTypeMap,
  Typography,
  useTheme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { useMemo } from "react";

export interface StatCardProps {
  title: string;
  value: number;
  deltaUnit: string;
  delta: number;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export function StatCard({
  title,
  value,
  delta,
  deltaUnit,
  Icon,
}: StatCardProps) {
  const theme = useTheme();
  const deltaFormatted = useMemo(() => {
    if (delta > 0) {
      return `+${delta}%`;
    } else if (delta < 0) {
      return `-${delta}%`;
    }
    return "0%";
  }, [delta]);

  const deltaColor = useMemo(() => {
    if (delta > 0) {
      return theme.palette.success.main;
    } else if (delta < 0) {
      return theme.palette.error.main;
    }
    return theme.palette.secondary.main;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delta]);

  const secondaryText = theme.palette.text.secondary;

  return (
    <Card sx={{ flex: 1, minWidth: { md: 200 } }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            color: secondaryText,
          }}
        >
          <Icon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "bold" }}>{value}</Typography>
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
            <Typography variant="body2">{deltaUnit}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export interface SimpleStatCardProps {
  title: string;
  value: number | undefined;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export function SimpleStatCard({ title, value, Icon }: SimpleStatCardProps) {
  return (
    <Card sx={{ minWidth: { md: 150 } }}>
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {title}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "textSecondary",
          }}
        >
          <Icon sx={{ color: "text.secondary" }} />
          <Typography>{value}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
