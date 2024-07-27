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
  LinearProgress,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Paper,
  Icon,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import { Add, CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const dateFormatter = new Intl.DateTimeFormat("en-us", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

type Task = {
  id: string;
  name: string;
  dueDate: Date;
  completed: boolean;
  count: number;
  members: string[];
  progress: number;
};

function LinearProgressWithValueLabel({ value }: { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const randomFemaleAvatar =
  "https://xsgames.co/randomusers/assets/avatars/female";
const randomMaleAvatar = "https://xsgames.co/randomusers/assets/avatars/male";

export default function Tasks() {
  const data: Task[] = [
    {
      id: "#E3041",
      name: "Create branded collateral",
      count: 3,
      completed: false,
      dueDate: new Date(2023, 9, 30),
      members: [
        `${randomFemaleAvatar}/70.jpg`,
        `${randomFemaleAvatar}/71.jpg`,
        `${randomMaleAvatar}/70.jpg`,
        `${randomMaleAvatar}/71.jpg`,
      ],
      progress: 25,
    },
    {
      id: "#E3042",
      name: "Develop bran guidelines",
      count: 2,
      completed: false,
      dueDate: new Date(2023, 10, 4),
      members: [
        `${randomFemaleAvatar}/1.jpg`,
        `${randomFemaleAvatar}/2.jpg`,
        `${randomMaleAvatar}/3.jpg`,
        `${randomMaleAvatar}/4.jpg`,
      ],
      progress: 25,
    },
    {
      id: "#E3043",
      name: "Refine UX/U for product pages",
      count: 6,
      completed: false,
      dueDate: new Date(2023, 10, 3),
      members: [
        `${randomFemaleAvatar}/5.jpg`,
        `${randomFemaleAvatar}/6.jpg`,
        `${randomMaleAvatar}/7.jpg`,
        `${randomMaleAvatar}/8.jpg`,
      ],
      progress: 10,
    },
    {
      id: "#E3044",
      name: "Collaborate on website redesign",
      dueDate: new Date(2023, 9, 23),
      count: 6,
      completed: true,
      members: [
        `${randomFemaleAvatar}/9.jpg`,
        `${randomFemaleAvatar}/10.jpg`,
        `${randomMaleAvatar}/11.jpg`,
        `${randomMaleAvatar}/12.jpg`,
      ],
      progress: 100,
    },
    {
      id: "#E3045",
      name: "Conduct A/B testing on homepage",
      count: 2,
      completed: true,
      dueDate: new Date(2023, 9, 23),
      members: [
        `${randomFemaleAvatar}/13.jpg`,
        `${randomFemaleAvatar}/14.jpg`,
        `${randomMaleAvatar}/15.jpg`,
        `${randomMaleAvatar}/16.jpg`,
      ],
      progress: 100,
    },
    {
      id: "#E3046",
      name: "Develop social media graphics",
      count: 5,
      completed: true,
      dueDate: new Date(2023, 9, 30),
      members: [
        `${randomFemaleAvatar}/17.jpg`,
        `${randomFemaleAvatar}/18.jpg`,
        `${randomMaleAvatar}/19.jpg`,
        `${randomMaleAvatar}/20.jpg`,
      ],
      progress: 100,
    },
    {
      id: "#E3047",
      name: "Finalize logo variations",
      count: 3,
      completed: true,
      dueDate: new Date(2023, 10, 4),
      members: [
        `${randomFemaleAvatar}/21.jpg`,
        `${randomFemaleAvatar}/22.jpg`,
        `${randomMaleAvatar}/23.jpg`,
        `${randomMaleAvatar}/24.jpg`,
      ],
      progress: 100,
    },
  ];
  return (
    <Card
      sx={{
        mt: 4,
        flexGrow: 1,
      }}
    >
      <CardHeader
        title="Today's Tasks"
        titleTypographyProps={{ variant: "body1" }}
        action={
          <IconButton>
            <Add />
          </IconButton>
        }
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Due</TableCell>
              <TableCell>Member</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<CheckBoxOutlineBlank fontSize="small" />}
                            checkedIcon={<CheckBox fontSize="small" />}
                            checked={task.completed}
                            readOnly
                          />
                        }
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "text.secondary",
                                textDecoration: task.completed
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {task.name}
                            </Typography>
                          </Box>
                        }
                      />
                    </FormGroup>
                    <Box
                      sx={{
                        backgroundColor: grey[50],
                        display: "flex",
                        alignItems: "center",
                        padding: 0.5,
                        borderRadius: 1,
                        color: "text.primary",
                      }}
                    >
                      <Icon
                        className="fa fa-code-branch"
                        fontSize="small"
                        sx={{ mr: 1 }}
                      />
                      <Typography fontSize="small" variant="body2">
                        {task.count}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{dateFormatter.format(task.dueDate)}</TableCell>
                <TableCell>
                  <AvatarGroup max={4}>
                    {task.members.map((avatarUrl, i) => (
                      <Avatar
                        key={i}
                        src={avatarUrl}
                        sx={{ width: 24, height: 24 }}
                      />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell>
                  <LinearProgressWithValueLabel value={task.progress} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
