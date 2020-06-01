import React from "react";
import { Grid } from "@material-ui/core";
import { Layout } from "./Layout";
import ApiCard from "./ApiCard";
import data from "../data.json";

export function Home() {
  return (
    <Layout>
      <Grid container justify="center">
        <Grid spacing={4} alignItems="center" justify="center" container>
          {data.map((data) => (
            <ApiCard {...data} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}
