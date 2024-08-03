import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Card,
  CardHeader,
  IconButton,
  Paper,
  TableCell,
  Skeleton,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import ScheduleTableCell from "./ScheduleTableCell";
import ScheduleItem, { ScheduleItemColor } from "./ScheduleItem";
import { grey } from "@mui/material/colors";
import { useTasks } from "./api";
import { SelectedValues } from "./types";

const days = [
  {
    title: "Mon 20",
  },
  {
    title: "Tue 21",
  },
  {
    title: "Wed 22",
  },
  {
    title: "Thu 23",
  },
  {
    title: "Fri 24",
  },
];

export default function Schedule() {
  const { isLoading, data } = useTasks();
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedTimes, setSelectedTimes] = useState<SelectedValues>({
    3: true,
    4: true,
  });

  function handleToggleDaySelection(i: number) {
    setSelectedDay(i);
  }
  function handleToggleRowSelection(i: number) {
    setSelectedTimes((selection) => {
      const updated = { ...selection };
      if (updated[i]) {
        delete updated[i];
      } else {
        updated[i] = true;
      }
      return updated;
    });
  }
  return (
    <Card
      sx={{
        mt: 4,
      }}
    >
      <CardHeader
        title="Schedule"
        titleTypographyProps={{ variant: "body1" }}
        action={
          <IconButton>
            <Add />
          </IconButton>
        }
      />

      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <ScheduleTableCell>Time</ScheduleTableCell>
              {days.map((day, i) => (
                <ScheduleTableCell
                  key={day.title}
                  sx={{
                    bgcolor: selectedDay === i ? "white" : grey[50],
                    cursor: "pointer",
                    borderBottom: (theme) =>
                      selectedDay === i
                        ? `2px solid ${theme.palette.primary.main}`
                        : "none",
                  }}
                  onClick={() => handleToggleDaySelection(i)}
                >
                  {day.title}
                </ScheduleTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
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
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              data?.map((row, i) => (
                <TableRow
                  key={row.time}
                  sx={{ bgcolor: selectedTimes[i] ? grey[50] : "white" }}
                >
                  <ScheduleTableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleToggleRowSelection(i)}
                  >
                    {row.time}
                  </ScheduleTableCell>
                  {row.events.map((event, i) => (
                    <ScheduleTableCell key={`${row.time}-${i}`}>
                      {event ? (
                        <ScheduleItem
                          title={event?.title}
                          color={event?.color as ScheduleItemColor}
                        />
                      ) : null}
                    </ScheduleTableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
