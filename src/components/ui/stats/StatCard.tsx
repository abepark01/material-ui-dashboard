import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

export default function StatCard({ children }: { children: ReactNode }) {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
