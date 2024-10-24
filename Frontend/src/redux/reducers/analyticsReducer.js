// import { FETCH_OFFICIALS_REQUEST, FETCH_OFFICIALS_SUCCESS, FETCH_OFFICIALS_FAILURE } from '../actions/analyticsActions';




export const locationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_LOCATIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const demographicsReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_DEMOGRAPHICS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const trialsPerCityReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TRIALS_PER_CITY':
        return action.payload;
      default:
        return state;
    }
  };
  


  const initialState = {
    data: [],
    totalDocs: 0,
    loading: false,
    error: null,
  };
  
  // Action types
  const FETCH_OFFICIALS_REQUEST = 'FETCH_OFFICIALS_REQUEST';
  const FETCH_OFFICIALS_SUCCESS = 'FETCH_OFFICIALS_SUCCESS';
  const FETCH_OFFICIALS_FAILURE = 'FETCH_OFFICIALS_FAILURE';
  
  // Reducer
  export  function officialsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_OFFICIALS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_OFFICIALS_SUCCESS:
        return {
          ...state,
          data: action.payload.data,
          totalDocs: action.payload.totalDocs,
          loading: false,
        };
      case FETCH_OFFICIALS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  