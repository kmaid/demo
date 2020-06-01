import React from "react";
import { Button, Grid, Paper, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { startRequest, makeRequest } from "../store/apiCard/actions";
import { Status } from "../store/apiCard/types";

interface ApiCardProps {
  id: number;
  url: string;
  text: string;
  message?: string;
  status?: Status;
}

const mapStateToProps = (state: any, ownProps: ApiCardProps) => {
  if (state.apiCards && state.apiCards[ownProps.id]) {
    return {
      ...state,
      ...state.apiCards[ownProps.id],
    };
  }
  return state;
};

const mapDispatchToProps = { startRequest, makeRequest };

function ApiCard(props: any) {
  const sendSlowRequest = () => {
    props.startRequest(props.id, props.url);
    props.makeRequest(props.id, props.url);
  };
  return (
    <Grid item xs={4} md={2}>
      <Paper>
        <Box p={2} pt={3}>
          <Button variant="contained" color="primary" onClick={sendSlowRequest}>
            {props.status === Status.PENDING ? "Loading..." : props.text}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiCard);
