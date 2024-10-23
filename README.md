# Clinical-Trials-Siro
SIRO Assignment 


### Backend Setup

1. Navigate to the `backend/` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend/` directory and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb://localhost:27017/clinicalTrialsDB
    PORT=8000
    ```

4. Run the backend server:
    ```bash
    npm start
    ```

The server should now be running at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend/` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend/` directory and add your environment variables (if needed):
    ```
    REACT_APP_API_URL=http://localhost:8000/api
    ```

4. Run the frontend:
    ```bash
    npm start
    ```

The frontend should now be running at `http://localhost:3000`.

### How to Use

- Access the frontend at `http://localhost:3000`.
- The frontend will call backend APIs to display clinical trial analytics.

### API Endpoints

The backend exposes the following API endpoints:
- **GET /api/analytics/locations** - Get clinical trial locations by country.
- **GET /api/analytics/demographics** - Get participant demographics.
- **GET /api/analytics/trials-per-city** - Get number of trials per city.

### Clear Comments in the Code

- **Backend**: Each function is commented with its purpose (e.g., fetching data from MongoDB).
- **Frontend**: Redux actions and components are documented to explain how data is fetched and displayed.
