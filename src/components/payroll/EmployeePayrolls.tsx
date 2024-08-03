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
import { SimpleStatCard, SimpleStatCardProps } from "@/components/ui/stats";

const data: SimpleStatCardProps[] = [
  {
    title: "Total payrolls",
    value: 268,
    Icon: Bookmark,
  },
  {
    title: "Draft",
    value: 13,
    Icon: EditCalendar,
  },
  {
    title: "Overdue",
    value: 7,
    Icon: CalendarToday,
  },
  {
    title: "Failed",
    value: 5,
    Icon: CreditCardOff,
  },
  {
    title: "Scheduled",
    value: 24,
    Icon: EventAvailable,
  },
  {
    title: "Paid",
    value: 24,
    Icon: BookmarkAdded,
  },
];

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
          {data.map((stat, i) => (
            <Grid size={{ xs: 12, md: 4, lg: 2 }} key={i}>
              <SimpleStatCard
                title={stat.title}
                value={stat.value}
                Icon={stat.Icon}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
