import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SnackbarContent, withStyles } from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import RetryIcon from '@material-ui/icons/Refresh';
import WarningIcon from '@material-ui/icons/Warning';
import { useUIDSeed } from 'react-uid';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const actionIcon = {
  close: CloseIcon,
  retry: RetryIcon,
};

const styles = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function SnackbarUtils(props) {
  const {
    classes, className, message, onClose, variant, action, ...other
  } = props;
  const Icon = variantIcon[variant];
  const ActionIcon = actionIcon[action];

  const snackbarUIDGenerator = useUIDSeed();

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id={snackbarUIDGenerator('snackbar')} className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
            )}
      action={[
        <IconButton
          key="close"
          id={snackbarUIDGenerator('close-snackbar')}
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <ActionIcon className={classes.icon} />
        </IconButton>,
      ]}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...other}
    />
  );
}

SnackbarUtils.propTypes = {
  action: PropTypes.string,
  classes: PropTypes.shape({
    close: PropTypes.string,
    icon: PropTypes.string,
    iconVariant: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

SnackbarUtils.defaultProps = {
  action: 'close',
  className: '',
  message: '',
  onClose: () => {},
};

export default withStyles(styles)(SnackbarUtils);
