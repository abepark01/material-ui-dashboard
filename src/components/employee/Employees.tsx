import React from "react";
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
} from "@mui/material";
import {
  CheckCircleOutline,
  KeyboardArrowDown,
  MoreHoriz,
} from "@mui/icons-material";

type Employee = {
  name: string;
  id: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
};

const randomFemaleAvatar =
  "https://xsgames.co/randomusers/assets/avatars/female";
const randomMaleAvatar = "https://xsgames.co/randomusers/assets/avatars/male";

export default function EmployeesTable() {
  const data: Employee[] = [
    {
      name: "Darrel Steward",
      id: "#E3041",
      email: "darrelste@mail.com",
      role: "Sr. Project Manager",
      status: "Active",
      avatar: `${randomMaleAvatar}/20.jpg`,
    },
    {
      name: "Wade Warren",
      id: "#E3042",
      email: "wadewarr@mail.com",
      role: "Jr. Developer",
      status: "Active",
      avatar: `${randomMaleAvatar}/21.jpg`,
    },
    {
      name: "Jerome Bell",
      id: "#E3043",
      email: "jeromebell@mail.com",
      role: "Sr. Human Resources",
      status: "Active",
      avatar: `${randomMaleAvatar}/22.jpg`,
    },
    {
      name: "Marvin McKinney",
      id: "#E3044",
      email: "marvinmck@mail.com",
      role: "Sr. Developer",
      status: "Active",
      avatar: `${randomMaleAvatar}/23.jpg`,
    },
    {
      name: "Brooklyn Simmons",
      id: "#E3045",
      email: "brooklynsimm@mail.com",
      role: "Sr. Product Designer",
      status: "Active",
      avatar: `${randomFemaleAvatar}/24.jpg`,
    },
  ];
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
            {data.map((employee) => (
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
