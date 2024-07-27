import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { grey } from "@mui/material/colors";
import "@fortawesome/fontawesome-free/css/all.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#e74901",
    },
    grey: {
      ...grey,
      50: "#fafbfd",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        outlined: {
          backgroundColor: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: grey[700],
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f7f9fb",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f9fb",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f9fb",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "##f7f9fb",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          backgroundColor: "##f7f9fb",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: "##f7f9fb",
          "&.Mui-selected": {
            // this is to refer to the prop provided by M-UI
            backgroundColor: "white", // updated backgroundColor
            borderRadius: 4,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: grey[300],
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: grey[600],
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f9fb",
          textTransform: "uppercase",
          color: grey[500],
        },
      },
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
