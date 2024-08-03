import { Unstable_Grid2 as Grid, Skeleton } from "@mui/material";
import React, { useMemo } from "react";
import StatCard from "@/components/ui/stats/StatCard";
import StatCardHeader from "@/components/ui/stats/StatCardHeader";
import StatCardContent from "@/components/ui/stats/StatCardContent";
import StatCardDelta from "@/components/ui/stats/StatCardDelta";
import { Frequency } from "./types";
import { useEmployeeStats } from "./api";
import { GroupAdd, GroupRemove, People, Work } from "@mui/icons-material";
import StatCardValue from "../ui/stats/StatCardValue";

function getUnitLabel(frequency: Frequency) {
  if (frequency === "weekly") {
    return "last week";
  }
  if (frequency === "yearly") {
    return "last year";
  }
  return "last month";
}
export default function EmployeeStats({ frequency }: { frequency: Frequency }) {
  const { isLoading, data: employeeStats } = useEmployeeStats({
    frequency,
  });

  const timeAgo = useMemo(() => {
    return getUnitLabel(frequency);
  }, [frequency]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard>
          <StatCardHeader title="Total Employees" Icon={People} />
          <StatCardContent>
            {isLoading && <Skeleton variant="text" width="100%" />}
            {!isLoading && employeeStats && (
              <>
                <StatCardValue
                  value={employeeStats?.totalEmployeeCount.value}
                />
                <StatCardDelta
                  value={employeeStats?.totalEmployeeCount.delta}
                  timeAgo={timeAgo}
                />
              </>
            )}
          </StatCardContent>
        </StatCard>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard>
          <StatCardHeader title="New Employee" Icon={GroupAdd} />
          <StatCardContent>
            {isLoading && <Skeleton variant="text" width="100%" />}
            {!isLoading && employeeStats && (
              <>
                <StatCardValue value={employeeStats?.newEmployeeCount.value} />
                <StatCardDelta
                  value={employeeStats?.newEmployeeCount.delta}
                  timeAgo={timeAgo}
                />
              </>
            )}
          </StatCardContent>
        </StatCard>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard>
          <StatCardHeader title="Resigned Employee" Icon={GroupRemove} />
          <StatCardContent>
            {isLoading && <Skeleton variant="text" width="100%" />}
            {!isLoading && employeeStats && (
              <>
                <StatCardValue
                  value={employeeStats?.resignedEmployeeCount.value}
                />
                <StatCardDelta
                  value={employeeStats?.resignedEmployeeCount.delta}
                  timeAgo={timeAgo}
                />
              </>
            )}
          </StatCardContent>
        </StatCard>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard>
          <StatCardHeader title="Job Applicants" Icon={Work} />
          <StatCardContent>
            {isLoading && <Skeleton variant="text" width="100%" />}
            {!isLoading && employeeStats && (
              <>
                <StatCardValue value={employeeStats?.jobApplicantCount.value} />
                <StatCardDelta
                  value={employeeStats?.jobApplicantCount.delta}
                  timeAgo={timeAgo}
                />
              </>
            )}
          </StatCardContent>
        </StatCard>
      </Grid>
    </Grid>
  );
}
