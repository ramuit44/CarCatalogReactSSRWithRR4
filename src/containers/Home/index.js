/*
  Home.js

  Child route of <Base> located at `/`
*/

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CarCard from '../../views/CarCard';
import * as actions from '../../actions/index';

import { bindActionCreators } from 'redux';
import './index.css';

class Home extends React.Component {
  static loadData(store, match) {
    // See /src/views/StaticPageWithDataDeps for details on `static loadData()`

    // On the server, this is passed `react-router-config`'s matching URL
    // From here, we can extract `:id` via `match.params`

    return Promise.all([
      store.dispatch(actions.fetchModels()), 
      store.dispatch(actions.fetchMakes()), 
      store.dispatch(actions.fetchCarOfWeek())
    ]);

  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchCarOfWeek } = this.props.actions;

    fetchCarOfWeek();

  }



  render() {
    // Ok to use `<Link>` here now, since the parent component (`<Base>`)
    // contains all router logic
    const { defaultCar, readyToRender } = this.props;
    return (
      <div className="home-view">
        <div className="home-view-content">
          <div className="home-content-details">
            {readyToRender && <CarCard {...defaultCar} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, route) => {
  // extract the relevent parts of the state you need for this view
  const { modelsState, makesState, carOfWeekState } = state;
  const { fetchingModels, models } = modelsState;
  const { fetchingCarOfWeek, carOfWeek } = carOfWeekState;
  const { fetchingMakes, makes } = makesState;
  let defaultCar = {};



  const readyToRender = (carOfWeek && models && makes);

  //can be moved to selector with reselect
  if (readyToRender) {
    const selectedModelId = carOfWeek.modelId;
    defaultCar = models.find(function (element) {
      return element.id == selectedModelId;
    });

    if (defaultCar) {
      defaultCar.review = (carOfWeek) ? carOfWeek.review : "";
      var make = makes.find(function (element) {
        return element.id === defaultCar.makeId;
      });
      defaultCar.make = make.name;
    }


  }

  return {
    defaultCar,
    readyToRender
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));



