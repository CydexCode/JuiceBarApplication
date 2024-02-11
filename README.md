# RestaurantApplication


Welcome to the Restaurant App! This application is designed to [provide a brief description of the app's purpose].

Setup Instructions
Follow these steps to set up and run the restaurant app on your local machine:

Navigate to the restaurant-app folder:
cd restaurant-app


Update the backend port in the startup class to match your application port. Open the relevant file (e.g., Startup.cs) and modify the base URL: app.UseCors(options => options.WithOrigins("http://localhost:3000")
3.Install Material-UI: npm install @material-ui/core

4.Copy and paste Material-UI icon codes into your components. For example: import ReorderIcon from '@mui/icons-material/Reorder';

5.Install Axios for API calls: npm install axios

6.Copy and paste the base URL into your API folder. Update API calls with the backend running URL. For example: const baseURL = 'http://localhost:53688/';

7.To run the application: npm start
