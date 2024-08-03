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
  Skeleton,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { SimpleStatCard, SimpleStatCardProps } from "@/components/ui/stats";
import { usePayrollStats } from "./api";
import { useMemo } from "react";

export default function EmployeePayrolls() {
  const { isLoading, data: payrollStats } = usePayrollStats();

  const data: SimpleStatCardProps[] | undefined = useMemo(() => {
    if (isLoading) {
      return [];
    }
    return [
      {
        title: "Total payrolls",
        value: payrollStats?.totalPayrollCount,
        Icon: Bookmark,
      },
      {
        title: "Draft",
        value: payrollStats?.draftCount,
        Icon: EditCalendar,
      },
      {
        title: "Overdue",
        value: payrollStats?.overdueCount,
        Icon: CalendarToday,
      },
      {
        title: "Failed",
        value: payrollStats?.failedCount,
        Icon: CreditCardOff,
      },
      {
        title: "Scheduled",
        value: payrollStats?.scheduledCount,
        Icon: EventAvailable,
      },
      {
        title: "Paid",
        value: payrollStats?.paidCount,
        Icon: BookmarkAdded,
      },
    ];
  }, [payrollStats, isLoading]);
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
        {isLoading && <Skeleton />}
        <Grid spacing={2} container>
          {!isLoading &&
            data?.map((stat, i) => (
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
