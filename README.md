# SkyAirlines - Flight Booking Application ✈️

SkyAirlines is a MERN stack flight booking application designed to offer users a seamless experience when searching for and booking flights. This project demonstrates the use of modern web technologies for real-time flight data handling, secure user login, and optimized performance.

## 🚀 Project Workflow

The SkyAirlines project follows a structured workflow to ensure smooth development, integration, and deployment:

1. **Frontend Development**: 
   - **UI Design**: Built with React and Material-UI, focusing on responsive and interactive elements for desktop, tablet, and mobile devices.
   - **Components Structure**: Essential components include `Header`, `FlightSearch`, `FlightList`, `ImageBanner`, `Footer`, and `Loader`.
   - **State Management**: Utilizes React's context API for managing flight search data across components.
   - **Routing**: Implements `BrowserRouter` for navigation, with conditional rendering to handle loading states effectively.

2. **Backend Development**:
   - **API Setup**: Built with Express.js and Node.js to handle requests, including search queries and booking requests.
   - **Database**: MongoDB Atlas is used for storing flight data, user profiles, and booking records.
   - **Authentication**: JWT authentication for secure login, allowing integration with Google and Facebook via OAuth2.
   - **API Connections**: Properly structured RESTful API endpoints connect the backend to the frontend to fetch and display flight data upon search.

3. **Loading Animations**:
   - A custom loading animation with the SkyAirlines logo and smooth dots is displayed both at app startup and during the flight search.
   - A centered loading animation displays over the logo symbol, giving users feedback on loading status.

4. **Deployment**:
   - **Frontend**: Hosted on a CDN for fast loading and easy accessibility.
   - **Backend**: Deployed on a cloud server with MongoDB Atlas as the database.
   - **Continuous Integration**: Automates deployment upon merging to the main branch on GitHub.

## 📂 File Structure

```plaintext
SkyAirlines
│
├── fb_client           # Frontend (React application)
│   ├── src
│   │   ├── components  # UI components (Header, Footer, etc.)
│   │   ├── App.js      # Main app component with routing
│   │   ├── index.js    # Entry point for React
│   │   └── assets      # Images and static files
│
├── fb_backend          # Backend (Express application)
│   ├── server.js       # Main server file
│   ├── routes          # API endpoints
│   ├── controllers     # Controller logic for endpoints
│   └── config          # MongoDB and environment configurations
│
└── README.md           # Project documentation
```     
## Here's the Screenshorts
## Screenshots

### Home Page
![Home Page](Flight-Booking-App/images/Screenshot%202024-11-13%20123809.png)

### Loading Animations
![Loading Animations](Flight-Booking-App/images/Screenshot%202024-11-13%20130239.png)

### Flight Results
![Flight Results](Flight-Booking-App/images/Screenshot%202024-11-13%20123921.png)


## 🌟 Features

- **User-Friendly Interface**: Clean, intuitive UI designed for quick and efficient flight searches and bookings.
- **Real-Time Flight Search**: Fetches available flights and shows take-off and arrival times upon pressing "Search Flight."
- **Loading Indicators**: Displays custom loading animations for a polished user experience.
- **Authentication**: Secure login with options for "Continue with Google" and "Continue with Facebook."
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.

# 🛠️ Installation and Setup
## Clone the Repository
```
git clone https://github.com/Surendar-13/skyairlines.git
cd Skyairlines
```
## Install Dependencies
- Frontend:
```
cd fb_client
npm install
```
- Backend:
```
cd fb_backend
npm install
```
## Configure Environment Variables
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
- Replace your_mongodb_uri and your_jwt_secret with your actual MongoDB URI and a secure JWT secret for authentication.
## Run the Application
- Frontend:
```
cd fb_client
npm start
```
- Backend:
```
cd fb_backend
node server.js
```
- The frontend will be available at http://localhost:3000 and the backend at http://localhost:5001.

  ## 📌 Usage
  - Ensure both frontend and backend are running.
  - Access the frontend at http://localhost:3000 to start searching for flights.
  - Use the search bar to look up available flights, and view flight details in real time.

  ## 📈 Future Enhancements
  - Payment Integration: Secure payment gateways for flight bookings.
  - Advanced Filters: Filters for airlines, pricing, and layover options.
  - Email Notifications: Send booking confirmations and updates.
 
  ## 📝 License
  - This project is licensed under the MIT License.

# Happy booking with SkyAirlines! ✈️
