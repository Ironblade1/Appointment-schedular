
<h1>Home Page<h1/>
  
![Screenshot 2023-12-09 145540](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/cb772bfa-4fea-4a95-9af1-b87d0b37cd4c)
![Screenshot 2023-12-09 145606](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/b8e9744a-e496-4bbd-818b-e02647a487e4)

<br/>

<h1>Appointment List<h1/>

![Screenshot 2023-12-09 145704](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/9668af4b-6ba7-4335-8912-750327929ece)

<h1>Book Appointment Form<h1/>

![Screenshot 2023-12-09 145747](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/6ca0a723-c8f7-4ca2-9ad9-ae81e57acb9c)

<h1>Edit Form<h1/>

![Screenshot 2023-12-09 145818](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/f2f99b09-5d3a-49a7-8bfb-fbd94f25a416)

<h1>Calender Page<h1/>
<p> Client see his Appointment here by Day, Week, Month </p>
  
![Screenshot 2023-12-09 150119](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/c987c408-febf-45d5-bd22-2f29666604b7)


![Screenshot 2023-12-09 150151](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/3a159e13-e03f-437f-82fb-80b71ddfd9a5)


![Screenshot 2023-12-09 150208](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/51263fea-5227-4ef4-9ea7-cffa0c337830)


![Screenshot 2023-12-09 150226](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/e83ce5e5-fad8-4b41-8942-7c751b156b3e)







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Firstly we have to install all the modules by npm command

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br/>


<h1>Project Structure: <h1/>

![image](https://github.com/Ironblade1/Appointment-schedular/assets/83993262/83893549-f2d8-470e-a5a0-780cda0cd301)

  
# Component Description

<p style="font-size: 16px;">
  <strong>AppointmentList.js:</strong>
  Manages and displays a list of appointments. Retrieves data from local storage (AppointmentList) and provides functionality for adding and editing appointments.

  <strong>Calender.js:</strong>
  Displays appointments in a calendar using the Syncfusion Scheduler component. Retrieves appointment data from local storage and maps it to the required format for the Scheduler.

  <strong>Card.js:</strong>
  A generic card component that can be used for displaying information in a card format. Used across the application for consistent styling.

  <strong>Footer.js:</strong>
  Footer component for the website. Provides information, links, or any other relevant content that should be displayed at the bottom of the page.

  <strong>Header.js:</strong>
  Header component for the website. Typically includes navigation links, branding, or other elements that should be displayed at the top of the page.

  <strong>Home.js:</strong>
  Home page component. Acts as the main landing page for the website and may include an overview of the services or key information.

  <strong>View.js:</strong>
  View component. Responsible for displaying a specific view or content. The exact purpose may vary based on your application's requirements.
</p>

# Modal Descriptions

<p style="font-size: 16px;">
  <strong>Booking.js:</strong>
  Modal component for adding new appointments. Allows the user to input details such as firstName, lastName, Location, and date-time.

  <strong>EditAppointment.js:</strong>
  Modal component for editing existing appointments. Similar to the Booking modal but pre-filled with the details of the selected appointment.
</p>

# Other Files

<p style="font-size: 16px;">
  <strong>App.css:</strong>
  Global styles that apply to the entire application.

  <strong>index.js:</strong>
  Entry point for the React application. Renders the App component into the root HTML element.

  <strong>package.json:</strong>
  Configuration file for the Node.js project. Contains metadata about the project and a list of dependencies.
</p>

# How it Works

<p style="font-size: 16px;">
  <strong>Data Storage:</strong>
  Appointment data is stored in the local storage under the key AppointmentList.

  <strong>AppointmentList.js:</strong>
  Manages the list of appointments, provides functionality for adding and editing appointments, and retrieves data from local storage.

  <strong>Calender.js:</strong>
  Uses the Syncfusion Scheduler component to display appointments in a calendar format. Retrieves appointment data from local storage and formats it appropriately.

  <strong>Modal Components:</strong>
  Booking.js allows users to add new appointments, and EditAppointment.js allows users to edit existing appointments.

  <strong>Components:</strong>
  Various components (Card.js, Footer.js, Header.js, etc.) contribute to the overall structure and layout of the website, promoting modularity and reusability.

  <strong>CSS Styles:</strong>
  Styles are defined in App.css for consistent styling across the application.
</p>

# How to Use

<p style="font-size: 16px;">
  <strong>Adding/Editing Appointments:</strong>
  Use the Booking modal to add new appointments, and the EditAppointment modal to edit existing appointments.

  <strong>Viewing Appointments:</strong>
  The Calender component displays appointments in a calendar format, providing views for the current date, week, and month.

  <strong>Navigation:</strong>
  Header and footer components may include navigation links to different sections or pages within the website  "/view" - link to Calender Page, "/AppointmentList" - link to Appointment-List.

  <strong>Data Storage:</strong>
  Appointment data is stored in the local storage under the key AppointmentList.
</p>

  **Data Storage:**
  Appointment data is stored in the local storage under the key AppointmentList.
</p>
