import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    color: ''
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};
const ToolbarStyle = {
  minHeight:'100%'
};
const header = {
  display: 'flex',
  justifyContent: 'space-between',
  padding:'4px'
};
const controls = {
  marginLeft: '30px'
};
const HeadingContent = {
  padding: '10px 0px'
};


class QAppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes, title, navValues, defaultValue } = this.props;
    const tabValue = this.state.value || defaultValue.title;

    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="inherit">
          <div style={header}>
            <Toolbar style={ToolbarStyle}>
              <div>
                <Typography variant="headline" color="inherit">
                  <span className="heading">{title}</span>
                </Typography>
              </div>
              <div style={controls}>
                <Typography variant="subheading" component="h2">
                  <Tabs value={tabValue} onChange={this.handleChange} indicatorColor="">
                    {navValues.map(function (object, i) {
                      return <Tab label={object.title} value={object.title} key={i} component={Link} 
                      to={object.link}/>;
                    })}
                  </Tabs>
                </Typography>
              </div>
            </Toolbar>



          </div>
        </AppBar>
      </div>
    );
  }
}

QAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QAppBar);