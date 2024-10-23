// Reducer to handle location-related actions
export const locationsReducer = (state = [], action) => {    
  switch (action.type) {      
    case 'FETCH_LOCATIONS':        
      return action.payload;  // Set state to fetched locations data
    default:        
      return state;  // Return current state if action type doesn't match
  }
};    

// Reducer to handle demographics-related actions
export const demographicsReducer = (state = [], action) => {    
  switch (action.type) {      
    case 'FETCH_DEMOGRAPHICS':        
      return action.payload;  // Set state to fetched demographics data
    default:        
      return state;  // Return current state if action type doesn't match
  }
};    

// Reducer to handle trials per city-related actions
export const trialsPerCityReducer = (state = [], action) => {    
  switch (action.type) {      
    case 'FETCH_TRIALS_PER_CITY':        
      return action.payload;  // Set state to fetched trials per city data
    default:        
      return state;  // Return current state if action type doesn't match
  }
};    

// Initial state for officials reducer
const initialState = {    
  data: [],    
  totalDocs: 0,    
  loading: false,    
  error: null,  
};    

// Action types for officials-related actions
const FETCH_OFFICIALS_REQUEST = 'FETCH_OFFICIALS_REQUEST';  
const FETCH_OFFICIALS_SUCCESS = 'FETCH_OFFICIALS_SUCCESS';  
const FETCH_OFFICIALS_FAILURE = 'FETCH_OFFICIALS_FAILURE';    

// Reducer to handle officials-related actions
export function officialsReducer(state = initialState, action) {    
  switch (action.type) {      
    case FETCH_OFFICIALS_REQUEST:        
      return { 
        ...state, 
        loading: true, 
        error: null 
      };  // Set loading to true and clear error
    case FETCH_OFFICIALS_SUCCESS:        
      return {          
        ...state,          
        data: action.payload.data,  // Update state with fetched officials data
        totalDocs: action.payload.totalDocs,  // Update total document count
        loading: false,        
      };      
    case FETCH_OFFICIALS_FAILURE:        
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };  // Set loading to false and store error
    default:        
      return state;  // Return current state if action type doesn't match
  }  
}
