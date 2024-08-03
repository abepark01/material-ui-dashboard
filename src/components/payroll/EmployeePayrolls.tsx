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
  Menu,
  MenuItem,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { usePayrollStats } from "./api";
import StatCard from "@/components/ui/stats/StatCard";
import StatCardHeader from "@/components/ui/stats/StatCardHeader";
import { SimpleStatCardContent } from "@/components/ui/stats/SimpleStatCardContent";
import EmployeeStats from "../dashboard/EmployeeStats";
import { useState } from "react";

export default function EmployeePayrolls() {
  const { isLoading, data: payrollStats } = usePayrollStats();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        title="Employee Payrolls"
        titleTypographyProps={{ variant: "body1" }}
        action={
          <>
            <IconButton id="payroll-actions-button" onClick={handleClick}>
              <MoreHoriz />
            </IconButton>

            <Menu
              id="payroll-actions-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "payroll-actions-button",
              }}
            >
              <MenuItem onClick={handleClose} disabled={isLoading}>
                Refresh
              </MenuItem>
              <MenuItem onClick={handleClose} disabled={isLoading}>
                Export to CSV
              </MenuItem>
            </Menu>
          </>
        }
      />
      <CardContent sx={{ bgcolor: grey[100] }}>
        <Grid spacing={2} container>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Total Payrolls" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.totalPayrollCount}
                  Icon={Bookmark}
                />
              )}
            </StatCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Drafts" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.draftCount}
                  Icon={EditCalendar}
                />
              )}
            </StatCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Overdue" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.overdueCount}
                  Icon={CalendarToday}
                />
              )}
            </StatCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Failed" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.failedCount}
                  Icon={CreditCardOff}
                />
              )}
            </StatCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Scheduled" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.totalPayrollCount}
                  Icon={EventAvailable}
                />
              )}
            </StatCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <StatCard>
              <StatCardHeader title="Paid" />
              {isLoading && <Skeleton width="100%" />}
              {payrollStats && (
                <SimpleStatCardContent
                  value={payrollStats?.paidCount}
                  Icon={BookmarkAdded}
                />
              )}
            </StatCard>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
