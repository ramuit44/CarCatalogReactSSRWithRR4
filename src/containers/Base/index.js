/*
  Base.js

  The "root" component that persists throughout the app,
  contains client router logic
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseRoutes from '../../routing/BaseRoutes.js';

import './index.css';
import QAppBar from '../../views/QAppBar';
import * as actions from '../../actions/index';

import { Navigation, HeadingTitle } from "../../config";

import { bindActionCreators } from 'redux';


class Base extends React.Component {

  

  // No data to fetch, no static method needed
  constructor(props) {
    super(props);

    // good for debugging - avoid excessive rendering
    this.renderCount = 0;
  }

  componentDidMount() {
    const { fetchModels, fetchMakes } = this.props.actions;
    fetchModels();
    fetchMakes();
  }

  render() {
    this.renderCount++;
    console.log('RENDERS:', this.renderCount)

    // --> /src/routing/BaseRoutes.js
    return (
      <div className="app-base">
        <QAppBar title={HeadingTitle} navValues={Navigation} defaultValue={Navigation[0]} />
        <BaseRoutes location={this.props.location} />
      </div>
    );
  }
}

const mapStateToProps = state => state.modelsState;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Base));
