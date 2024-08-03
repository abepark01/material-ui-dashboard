import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  Avatar,
  Skeleton,
} from "@mui/material";
import {
  CheckCircleOutline,
  KeyboardArrowDown,
  MoreHoriz,
} from "@mui/icons-material";
import { useEmployees } from "./api";

export default function EmployeesTable() {
  const { isLoading, data } = useEmployees();
  return (
    <Card
      sx={{
        mt: 4,
      }}
    >
      <CardHeader
        title="Employees"
        titleTypographyProps={{ variant: "body1" }}
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" sx={{ flex: 1 }} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              data?.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        alt={employee.name}
                        src={employee.avatar}
                        sx={{ width: 24, height: 24 }}
                      />
                      {employee.name}
                    </Box>
                  </TableCell>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 0.5,
                        alignItems: "center",
                        color: "success.main",
                      }}
                    >
                      <CheckCircleOutline />
                      <span>{employee.status}</span>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton sx={{ border: 0 }}>
                      <KeyboardArrowDown />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
