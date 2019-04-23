
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import AdminTab from './components/AdminTab.js';
import FinancialMonitoringTab from './components/FinancialMonitoringTab';
import { getUserInfo, setUserInfo } from './user';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SettlementWindowsTab from './components/SettlementWindowsTab';
import TransferVerificationTab from './components/TransferVerificationTab';

// TODO: consider adding an error boundary?
//       https://reactjs.org/docs/error-boundaries.html
// TODO: do we need to add styling to all the components? (Or should we get rid of this material
//       thing?)
// TODO: consider a big "DEVELOPMENT MODE" header when in development mode
// TODO: read more about PropTypes and available validation

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

function App(props) {
  const { classes } = props;
  const [user, setUser] = useState(getUserInfo());
  const [tab, setTab] = useState(0);

  const loginSuccessful = result => {
    setUserInfo(result);
    setUser(result);
  };

  // TODO: what are the md (and xs, etc.) props on Grid?
  return (
    <div className={classes.root}>
      {user === undefined ? <Login loginSuccessful={loginSuccessful} /> : (
        <>
          <AppBar position="static">
            <Tabs value={tab} onChange={(_, val) => setTab(val)}>
              <Tab label="Financial Monitoring" />
              <Tab label="Settlement Windows" />
              <Tab label="Administration" />
              <Tab label="Transfer Verification" />
            </Tabs>
          </AppBar>
          {tab === 0 && <FinancialMonitoringTab />}
          {tab === 1 && <SettlementWindowsTab />}
          {tab === 2 && <AdminTab />}
          {tab === 3 && <TransferVerificationTab />}
        </>
      )}
    </div>
  );
}

export default withStyles(styles)(App);
