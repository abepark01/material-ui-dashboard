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
} from "@mui/material";
import { Add } from "@mui/icons-material";
import ScheduleTableCell from "./ScheduleTableCell";
import ScheduleItem, { ScheduleItemColor } from "./ScheduleItem";
import { grey } from "@mui/material/colors";

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

const data = [
  {
    time: "9 AM",
    events: [
      null,
      null,
      {
        title: "Interview with Dan Smith",
        color: "purple",
      },
      null,
      null,
    ],
  },
  {
    time: "10 AM",
    events: [
      {
        title: "Onboarding Session",
        color: "orange",
      },
      null,
      null,
      {
        title: "Interview for marketing",
        color: "purple",
      },
      null,
    ],
  },
  {
    time: "11 AM",
    events: [
      null,
      {
        title: "Monthly Performance Review",
        color: "grey",
      },
      null,
      null,
      {
        title: "Project Kickoff for v2 Migration",
        color: "green",
      },
    ],
  },
  {
    time: "12 PM",
    events: [
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
    ],
  },
  {
    time: "1 PM",
    events: [
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
      {
        title: "Lunch break",
        color: "pink",
      },
      null,
    ],
  },
  {
    time: "2 PM",
    events: [
      {
        title: "Townhall Meeting",
        color: "green",
      },
      null,
      null,
      null,
      null,
    ],
  },
  {
    time: "3 PM",
    events: [
      null,
      null,
      {
        title: "Benefits Orientation",
        color: "green",
      },
      null,
      {
        title: "Performance Review",
        color: "grey",
      },
    ],
  },
  {
    time: "4 PM",
    events: [
      null,
      {
        title: "Recruitment Strategy",
        color: "brown",
      },
      null,
      null,
      null,
    ],
  },
  {
    time: "5 PM",
    events: [
      null,
      null,
      null,
      {
        title: "Department Heads Sync",
        color: "grey",
      },
      null,
    ],
  },
];

type SelectedValues = {
  [key: number]: boolean;
};

export default function Schedule() {
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
            {data.map((row, i) => (
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
