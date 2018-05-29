import * as types from "../actions/action-types";

const modelsInitialState = {
  models: [],
  fetchingModels: false
};

const makesInitialState = {
  makes: [],
  fetchingMakes: false
};

const carOfWeekInitialState = {
  carOfWeek: {},
  fetchingCarOfWeek: false
};


const modelsState = (state = modelsInitialState, action = {}) => {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case `${types.FETCH_MODELS_PENDING}`: {
      return Object.assign({}, state, {
        fetchingModels: true,
      });
    }
    case `${types.FETCH_MODELS_FULLFILLED}`: {
      return Object.assign({}, state, {
        fetchingModels: false,
        models: action.payload
      });
    }
    case `${types.FETCH_MODELS_REJECTED}`: {
      return {
        isRejected: true,
        error: "Get Profile Failed"
      };
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};


const makesState = (state = makesInitialState, action = {}) => {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case `${types.FETCH_MAKES_PENDING}`: {
      return Object.assign({}, state, {
        fetchingMakes: true,
      });
    }
    case `${types.FETCH_MAKES_FULLFILLED}`: {
      return Object.assign({}, state, {
        fetchingMakes: false,
        makes: action.payload
      });
    }
    case `${types.FETCH_MAKES_REJECTED}`: {
      return {
        isRejected: true,
        error: "Get Profile Failed"
      };
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};


const carOfWeekState = (state = carOfWeekInitialState, action = {}) => {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case `${types.FETCH_CAROF_WEEK_PENDING}`: {
      return Object.assign({}, state, {
        fetchingCarOfWeek: true,
      });
    }
    case `${types.FETCH_CAROF_WEEK_FULLFILLED}`: {
      return Object.assign({}, state, {
        fetchingCarOfWeek: false,
        carOfWeek: action.payload
      });
    }
    case `${types.FETCH_CAROF_WEEK_REJECTED}`: {
      return {
        isRejected: true,
        error: "Get Profile Failed"
      };
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};


const reducers = {
  modelsState,
  makesState,
  carOfWeekState

};

export default reducers;

