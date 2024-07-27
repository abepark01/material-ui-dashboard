import {
  Bookmark,
  BookmarkAdded,
  CalendarToday,
  CreditCardOff,
  EditCalendar,
  EventAvailable,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { SimpleStatCard } from "@/components/ui/stats";

export default function EmployeePayrolls() {
  return (
    <Card>
      <CardHeader
        title="Employee Payrolls"
        titleTypographyProps={{ variant: "body1" }}
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
      />
      <CardContent sx={{ bgcolor: grey[100] }}>
        <Grid spacing={2} container>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard
              title="Total payrolls"
              value={268}
              Icon={Bookmark}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard title="Draft" value={13} Icon={EditCalendar} />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard title="Overdue" value={5} Icon={CalendarToday} />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard title="Failed" value={5} Icon={CreditCardOff} />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard title="Scheduled" value={5} Icon={EventAvailable} />
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <SimpleStatCard title="Paid" value={5} Icon={BookmarkAdded} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
