import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function StatCardContent({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      {children}
    </Box>
  );
}
