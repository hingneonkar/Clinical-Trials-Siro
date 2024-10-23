import axios from 'axios'; // Importing axios for making HTTP requests

const apiUrl = process.env.REACT_APP_API_URL; // Base API URL from environment variables

// Fetch locations data
export const fetchLocations = () => async (dispatch) => {  
  const res = await axios.get(`${apiUrl}locations`); // Making GET request to the locations endpoint
  dispatch({ type: 'FETCH_LOCATIONS', payload: res.data }); // Dispatching action with fetched data
};

// Fetch demographics data
export const fetchDemographics = () => async (dispatch) => {  
  const res = await axios.get(`${apiUrl}demographics`); // Making GET request to the demographics endpoint
  dispatch({ type: 'FETCH_DEMOGRAPHICS', payload: res.data }); // Dispatching action with fetched data
};

// Fetch trials per city data
export const fetchTrialsPerCity = () => async (dispatch) => {  
  const res = await axios.get(`${apiUrl}trials-per-city`); // Making GET request to the trials per city endpoint
  dispatch({ type: 'FETCH_TRIALS_PER_CITY', payload: res.data }); // Dispatching action with fetched data
};

// Action types for officials-related actions
export const FETCH_OFFICIALS_REQUEST = 'FETCH_OFFICIALS_REQUEST';
export const FETCH_OFFICIALS_SUCCESS = 'FETCH_OFFICIALS_SUCCESS';
export const FETCH_OFFICIALS_FAILURE = 'FETCH_OFFICIALS_FAILURE';

// Fetch officials data with pagination
export const fetchOfficials = (page = 1, limit = 10) => async (dispatch) => {  
  dispatch({ type: FETCH_OFFICIALS_REQUEST }); // Dispatching request action to indicate loading
  try {    
    const response = await axios.get(`${apiUrl}officials_list?page=${page}&limit=${limit}`); // Making GET request with pagination parameters
    dispatch({      
      type: FETCH_OFFICIALS_SUCCESS,      
      payload: {        
        data: response.data.data, // Payload with officials data
        totalDocs: response.data.totalDocs, // Payload with total document count
      },    
    });  
  } catch (error) {    
    dispatch({ type: FETCH_OFFICIALS_FAILURE, payload: error.message }); // Dispatching failure action with error message
  }
};
