import * as endpoints from "./const";
import axios from 'axios';

class Api {
    static fetchModels(fetchParams) {
      return axios
        .get(`${endpoints.FETCH_MODELS}`, {
          params: fetchParams
        })
        .then(response => response.data)
        .then(data => {
          return data;
        })
        .catch(error => {
          console.log(error);
          throw error;
        });
    }

    static fetchMakes(fetchParams) {
      return axios
        .get(`${endpoints.FETCH_MAKES}`, {
          params: fetchParams
        })
        .then(response => response.data)
        .then(data => {
          return data;
        })
        .catch(error => {
          throw error;
        });
    }

    static fetchCarOfWeek(fetchParams) {
      return axios
        .get(`${endpoints.FETCH_CAROF_WEEK}`, {
          params: fetchParams
        })
        .then(response => response.data)
        .then(data => {
          return data;
        })
        .catch(error => {
          throw error;
        });
    }

  }

  export default Api;

  