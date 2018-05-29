import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  render() {
    const { classes, id, title, valueArray, isDisabled, selectedValue, handleChange } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl} disabled={isDisabled}>
          <InputLabel htmlFor={title}>{title}</InputLabel>
          <Select
            value={selectedValue}
            onChange={(event) => { handleChange(event, title) }}
            inputProps={{
              name: title,
              id: title,
            }}
          >
            {valueArray.map(function (object, i) {
              return <MenuItem value={object.id} key={i}>{object.name}</MenuItem>;
            })}


          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);