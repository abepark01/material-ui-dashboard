import {
  Add,
  CalendarToday,
  Download,
  GroupAdd,
  GroupRemove,
  LightMode,
  Notifications,
  People,
  Search,
  Work,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Unstable_Grid2 as Grid2,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { grey } from "@mui/material/colors";
import { StatCard } from "@/components/ui/stats";

const frequencies = [
  {
    name: "Monthly",
    value: "monthly",
  },
  {
    name: "Weekly",
    value: "weekly",
  },
  {
    name: "Yearly",
    value: "yearly",
  },
];

export default function Header() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    string | undefined
  >("monthly");

  const selectedFormatted = useMemo(() => {
    return frequencies.find((freq) => freq.value === selectedTimeframe)?.name;
  }, [selectedTimeframe]);
  function renderTitle() {
    return (
      <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
        <LightMode color="warning" />
        <Typography variant="body1">Good morning, Dean!</Typography>
      </Box>
    );
  }
  function handleTimeframeSelect(e: SelectChangeEvent) {
    setSelectedTimeframe(e?.target?.value);
  }

  function renderAction() {
    return (
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 0.5,
          alignItems: "start",
        }}
      >
        <FormControl variant="standard">
          <TextField
            id="global-search"
            type="search"
            placeholder="Quick search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ px: 1.5, backgroundColor: grey[200] }}
                    size="small"
                  >
                    <Typography variant="body1">/</Typography>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <IconButton>
          <CalendarToday fontSize="small" />
        </IconButton>
        <IconButton>
          <Notifications fontSize="small" />
        </IconButton>
      </Box>
    );
  }
  return (
    <Card style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
      <CardHeader title={renderTitle()} action={renderAction()} />
      <CardContent sx={{ bgcolor: (theme) => theme.palette.grey[50] }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}
        >
          <Card sx={{ width: 150, mb: 2 }}>
            <FormControl fullWidth>
              <Select
                autoWidth
                onChange={handleTimeframeSelect}
                displayEmpty
                value={selectedTimeframe}
                renderValue={() => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "text.secondary",
                      }}
                    >
                      <CalendarToday />
                      {selectedFormatted || "Select"}
                    </Box>
                  );
                }}
              >
                <MenuItem value=""></MenuItem>
                {frequencies.map((frequency) => {
                  return (
                    <MenuItem key={frequency.value} value={frequency.value}>
                      {frequency.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Card>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Button color="inherit" variant="outlined">
              <Download />
              Export
            </Button>
            <Button color="primary" variant="contained">
              <Add />
              New Entry
            </Button>
          </Box>
        </Box>
        <Grid2 container spacing={{ xs: 1, md: 2 }}>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <StatCard
              Icon={People}
              title="Total Employees"
              stat={234}
              delta={5}
              statUnit="last month"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <StatCard
              Icon={GroupAdd}
              title="New Employee"
              stat={432}
              delta={5}
              statUnit="last month"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <StatCard
              Icon={GroupRemove}
              title="Resigned Employee"
              stat={12}
              delta={2}
              statUnit="last month"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <StatCard
              Icon={Work}
              title="Job Applicants"
              stat={367}
              delta={10}
              statUnit="last month"
            />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
}
