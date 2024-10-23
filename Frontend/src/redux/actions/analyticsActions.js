import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchLocations = () => async (dispatch) => {
  const res = await axios.get(`${apiUrl}locations`);
  dispatch({ type: 'FETCH_LOCATIONS', payload: res.data });
};

export const fetchDemographics = () => async (dispatch) => {
  const res = await axios.get(`${apiUrl}demographics`);
  dispatch({ type: 'FETCH_DEMOGRAPHICS', payload: res.data });
};

export const fetchTrialsPerCity = () => async (dispatch) => {
  const res = await axios.get(`${apiUrl}trials-per-city`);
  dispatch({ type: 'FETCH_TRIALS_PER_CITY', payload: res.data });
};

export const FETCH_OFFICIALS_REQUEST = 'FETCH_OFFICIALS_REQUEST';
export const FETCH_OFFICIALS_SUCCESS = 'FETCH_OFFICIALS_SUCCESS';
export const FETCH_OFFICIALS_FAILURE = 'FETCH_OFFICIALS_FAILURE';

export const fetchOfficials = (page = 1, limit = 10) => async (dispatch) => {
  dispatch({ type: FETCH_OFFICIALS_REQUEST });
  try {
    const response = await axios.get(
      `${apiUrl}officials_list?page=${page}&limit=${limit}`
    );
    dispatch({
      type: FETCH_OFFICIALS_SUCCESS,
      payload: {
        data: response.data.data,
        totalDocs: response.data.totalDocs,
      },
    });
  } catch (error) {
    dispatch({ type: FETCH_OFFICIALS_FAILURE, payload: error.message });
  }
};