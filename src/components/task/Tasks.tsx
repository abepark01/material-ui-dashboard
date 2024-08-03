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
  Skeleton,
} from "@mui/material";
import { Add, CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useTasks } from "./api";

const dateFormatter = new Intl.DateTimeFormat("en-us", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

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
  const { isLoading, data } = useTasks();
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
              </TableRow>
            )}
            {!isLoading &&
              data?.map((task) => (
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
