import React from "react";
import {
  Button,
  Grid,
  Paper,
  Box,
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { startRequest, makeRequest } from "../store/apiCard/actions";
import { Status } from "../store/apiCard/types";
import { RootState } from "../store";

type ApiCardProps = {
  id: number;
  url: string;
  defaultText: string;
  message?: string;
  status?: Status;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonProgress: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const mapStateToProps = (state: RootState, ownProps: ApiCardProps) => {
  if (state.apiCards && state.apiCards[ownProps.id]) {
    return {
      ...state,
      ...state.apiCards[ownProps.id],
    };
  }
  return state;
};

function ApiCard(props: ApiCardProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sendSlowRequest = () => {
    dispatch(startRequest(props.id, props.url));
    dispatch(makeRequest(props.id, props.url));
  };
  return (
    <Grid item xs={4} md={2} alignContent="center">
      <Paper>
        <Box p={2} pt={3}>
          <Button
            variant="contained"
            color="primary"
            disabled={props.status === Status.PENDING}
            onClick={sendSlowRequest}
          >
            {props.message ? props.message : props.defaultText}
            {props.status === Status.PENDING ? (
              <CircularProgress size={24} className={classes.buttonProgress} />
            ) : null}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default connect(mapStateToProps)(ApiCard);
