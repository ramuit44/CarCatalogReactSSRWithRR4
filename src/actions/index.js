import * as types from "./action-types";
import Api from "../Api";

export function fetchModels() {
    return (dispatch) => {
      dispatch({ type: types.FETCH_MODELS_PENDING });
      return Api.fetchModels().then(
        (result) =>  dispatch({ type: types.FETCH_MODELS_FULLFILLED, payload:result }),
        (error) =>  dispatch({ type: types.FETCH_MODELS_REJECTED, error })
      );
    };
  }


  export function fetchMakes() {
    return (dispatch) => {
      dispatch({ type: types.FETCH_MAKES_PENDING });
      return Api.fetchMakes().then(
        (result) =>  dispatch({ type: types.FETCH_MAKES_FULLFILLED, payload:result }),
        (error) =>  dispatch({ type: types.FETCH_MAKES_REJECTED, error })
      );
    };
  }

  export function fetchCarOfWeek() {
    return (dispatch) => {
      dispatch({ type: types.FETCH_CAROF_WEEK_PENDING });
      return Api.fetchCarOfWeek().then(
        (result) =>  dispatch({ type: types.FETCH_CAROF_WEEK_FULLFILLED, payload:result }),
        (error) =>  dispatch({ type: types.FETCH_CAROF_WEEK_REJECTED, error })
      );
    };
  }



