import React, { useState } from "react";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import Head from "next/head";
import EmployeesTable from "@/components/employee/Employees";
import EmployeePayrolls from "@/components/payroll/EmployeePayrolls";
import Tasks from "@/components/task/Tasks";
import Schedule from "@/components/schedule/Schedule";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/dashboard/Header";

const drawerWidth = 240;

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  function handleCloseSidebar() {
    setSidebarOpen(false);
  }

  return (
    <>
      <Head>
        <title>ACME Dashboard</title>
      </Head>
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          drawerWidth={drawerWidth}
          onClose={handleCloseSidebar}
        />

        <Box component="main" sx={{ bgcolor: "background.default" }}>
          <Header />
          <Box sx={{ py: 0, px: { md: 2 }, flexGrow: 1 }}>
            <Grid container spacing={{ md: 2 }} alignItems="stretch">
              <Grid size={{ xs: 12, xl: 6 }}>
                <Tasks />
              </Grid>
              <Grid size={{ xs: 12, xl: 6 }}>
                <Schedule />
              </Grid>
            </Grid>
            <EmployeesTable />
            <Box sx={{ my: 4 }}>
              <EmployeePayrolls />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
