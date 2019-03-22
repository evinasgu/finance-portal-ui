
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function PreviousSettlementWindowInfo(props) {
  const { classes, previousSettlementWindow: { payments, receipts } } = props;
  return (
    <div className={classes.root}>
      <h2>Previous Settlement Window</h2>
      <Grid container spacing={0}>

        <Grid item md={4} />
        <Grid item md={4}>
          <Paper>Number of transactions</Paper>
        </Grid>
        <Grid item md={4}>
          <Paper>Amount</Paper>
        </Grid>

        <Grid item md={4}>
          <Paper>Payments</Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            {payments.numTransactions}
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            {payments.senderAmount}
          </Paper>
        </Grid>

        <Grid item md={4}>
          <Paper>Receipts</Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            {receipts.numTransactions}
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            {receipts.senderAmount}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

PreviousSettlementWindowInfo.propTypes = {
  previousSettlementWindow: PropTypes.object.isRequired
};

export default withStyles(styles)(PreviousSettlementWindowInfo);
