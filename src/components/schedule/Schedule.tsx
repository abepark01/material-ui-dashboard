import React from "react";
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
import ScheduleItem from "./ScheduleItem";

export default function Schedule() {
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
              <ScheduleTableCell>Mon 21</ScheduleTableCell>
              <ScheduleTableCell>Tue 22</ScheduleTableCell>
              <ScheduleTableCell>Wed 23</ScheduleTableCell>
              <ScheduleTableCell>Thu 24</ScheduleTableCell>
              <ScheduleTableCell>Fri 25</ScheduleTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <ScheduleTableCell>9 AM</ScheduleTableCell>
              <ScheduleTableCell></ScheduleTableCell>
              <ScheduleTableCell></ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Interview with Dan Smith" color="purple" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>10 AM</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Onboarding Session" color="brown" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell></ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem
                  title="Interview with marketing team"
                  color="purple"
                />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>11 AM</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Monthly Performance call" />
              </ScheduleTableCell>
              <ScheduleTableCell></ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="pink" />
              </ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>12 PM</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="pink" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="pink" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="pink" />
              </ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>1 PM</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="brown" />
              </ScheduleTableCell>
              <ScheduleTableCell></ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Lunch break" color="brown" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>2 PM</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Town Hall Meeting" color="green" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>3 PM</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Benefits Orientation" color="green" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Performance Review" color="green" />
              </ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>4 PM</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Recruiting Strategy" color="brown" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
            <TableRow>
              <ScheduleTableCell>5 PM</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
              <ScheduleTableCell>
                <ScheduleItem title="Department Heads" color="grey" />
              </ScheduleTableCell>
              <ScheduleTableCell>&nbsp;</ScheduleTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
