import {
  AddAlarm,
  Assignment,
  BookmarkAdded,
  Campaign,
  ControlPoint,
  EventBusy,
  GroupAdd,
  Interests,
  Loyalty,
  MonetizationOn,
  OfflineBolt,
  Payment,
  People,
  SpaceDashboard,
  ViewSidebar,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
  ListSubheader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  drawerWidth: number;
  onClose: () => void;
}

function Navigation({ onClose }: { onClose: () => void }) {
  return (
    <List>
      <ListSubheader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              color: "white",
              background: (theme) => theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Interests />
          </IconButton>
          <Typography variant="body2">ACME</Typography>
        </Box>
        <IconButton onClick={onClose}>
          <ViewSidebar />
        </IconButton>
      </ListSubheader>
      <ListItemButton selected>
        <ListItemIcon>
          <SpaceDashboard />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItemButton>
      <Divider />
      <ListSubheader>Team Management</ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText>Employee</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupAdd />
        </ListItemIcon>
        <ListItemText>Onboarding</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EventBusy />
        </ListItemIcon>
        <ListItemText>Leave</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddAlarm />
        </ListItemIcon>
        <ListItemText>Time tracking</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Loyalty />
        </ListItemIcon>
        <ListItemText>Rewards</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ControlPoint />
        </ListItemIcon>
        <ListItemText>Costs</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <OfflineBolt />
        </ListItemIcon>
        <ListItemText>Compensation</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText>Requests</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Campaign />
        </ListItemIcon>
        <ListItemText>Feedback</ListItemText>
      </ListItemButton>
      <Divider />
      <ListSubheader>Finances</ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <MonetizationOn />
        </ListItemIcon>
        <ListItemText>Payroll</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Payment />
        </ListItemIcon>
        <ListItemText>Invoices</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BookmarkAdded />
        </ListItemIcon>
        <ListItemText>Billing</ListItemText>
      </ListItemButton>
    </List>
  );
}

export default function Sidebar({
  sidebarOpen,
  drawerWidth,
  onClose,
}: SidebarProps) {
  return (
    <Box
      component="nav"
      sx={{ width: { lg: drawerWidth, flexShrink: { sm: 0 } } }}
    >
      <Drawer
        open={sidebarOpen}
        variant="temporary"
        anchor="left"
        sx={{
          display: { xs: "block", lg: "none" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Navigation onClose={onClose} />
      </Drawer>
      <Drawer
        open
        variant="persistent"
        anchor="left"
        sx={{
          display: { xs: "none", lg: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Navigation onClose={onClose} />
      </Drawer>
    </Box>
  );
}
