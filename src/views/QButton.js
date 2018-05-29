import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop:'15px'
    
  },
  input: {
    display: 'block',
  },
});

function  QButton(props) {
  const { classes, title, link, onClick, isDisabled } = props;
  return (
    <div>
      <Button variant="raised" color="secondary" disabled={isDisabled} onClick={() => onClick()} className={classes.button}>
        {title}
      </Button>
      
    </div>
  );
}

QButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QButton);
