import React from "react";
import { Button, Grid, Paper, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { sendRequest } from "../store/apiCard/actions";

interface ApiCardProps {
  id: number;
  url: string;
  text: string;
}

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = { sendRequest };

function ApiCard(props: any) {
  const sendSlowRequest = () => {
    props.sendRequest(props.id, props.url);
  };
  return (
    <Grid item xs={4} md={2}>
      <Paper>
        <Box p={2} pt={3}>
          <Button variant="contained" color="primary" onClick={sendSlowRequest}>
            {props.text}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiCard);
