# DocOnCall - Healthcare Website

![DocOnCall Logo](Images/logo.png)


## Overview
**DocOnCall** is a healthcare web platform designed to provide medical consultation and appointment scheduling services. The project includes a user-friendly interface, seamless navigation, and integration with various medical data sources.

## Features
- **User Registration & Authentication**
- **Doctor Profiles & Listings**
- **Appointment Booking System**
- **Medical Consultation via Chat & Video**
- **Prescription & Medical Records Management**
- **Admin Dashboard for Management**
- **Mobile Responsive Design**

## Technologies Used
- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** CSS Modules
- **Deployment:** GitHub, Vercel/Heroku

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **Git**
- **MongoDB** (or use a cloud database like MongoDB Atlas)

### Steps to Run Locally
1. **Clone the repository**
   ```sh
   git clone https://github.com/YourUsername/DOCTORCLINIC-WEBSITE.git
   cd DOCTORCLINIC-WEBSITE
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add the following details:
     ```env
     MONGO_URI=your_mongo_database_uri
     PORT=5000
     JWT_SECRET=your_secret_key
     ```

4. **Run the application**
   ```sh
   npm start
   ```
   The server will run at `http://localhost:5000`

## Folder Structure
```
DOCTORCLINIC-WEBSITE/
│-- src/
│   │-- Components/
│   │   │-- Nav/
│   │   │   │-- Navbar.js
│   │   │   │-- Nav.css
│   │-- Pages/
│   │   │-- Home.js
│   │   │-- Doctors.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
│-- .gitignore
```

## Deployment
1. **Build the project**
   ```sh
   npm run build
   ```
2. **Deploy on Vercel or Heroku**
   ```sh
   vercel deploy
   ```

## Contribution Guidelines
1. Fork the repository
2. Create a feature branch (`feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is licensed under the **MIT License**.

---
### Contact
For inquiries and collaboration, reach out via ....

