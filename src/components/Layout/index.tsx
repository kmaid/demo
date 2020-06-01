import React from "react";
import "./Layout.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
interface LayoutProps {}

export function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className="Layout">{props.children}</div>
    </>
  );
}
