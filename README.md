# Bosta Shipment Tracking React App

## Overview
This project is a React application developed to fulfill the requirements outlined by Bosta for their shipment tracking service. The application allows users to track shipments using the Bosta API, providing a UI similar to the tracking service on the Bosta website. It supports both English and Arabic languages, features responsive design, and utilizes Redux for state management.

## Features
- **Bosta API Integration**: Fetches shipment details from the Bosta Shipment tracking API.
- **Responsive Design**: Fully responsive UI compatible with various devices and screen sizes.
- **Language Localization**: Supports both English and Arabic languages.

## Technologies Used
- React
- Redux for state management
- JavaScript (ES6)
- Sass

## Project Structure
bosta-shipment-tracking/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── Components/
│ │ ├── Global
│ │ ├── TrackingService
│ │ ├── Icons
│ │
│ ├── pages/
│ │ ├── TrackingService
│ │
│ ├── i18n/
│ │ ├── locale
│ │ ├── config.js
│ │
│ ├── functions/
│ │ ├── time.js
│ │ ├── trackShipment.js
│ │
│ ├── utils/
│ │ ├── Services
│ │
│ ├── store/
│ │ ├── Thunks/
│ │ ├── Slices/
│ │ └── index.js
│ │
│ ├── styles/
│ │ ├── partials/
│ │ └── style.scss
│ │
│ ├── App.js
│ └── ...
│
├── README.md
└── ...


## Getting Started
1. Clone the repository: `git clone https://github.com/sahlabdelrahman/bosta-shipment-tracker.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Deployment
The application is hosted on GitHub Pages for demonstration purposes. You can access it [https://sahlabdelrahman.github.io/bosta-shipment-tracker/].
eenshot 2](screenshots/screenshot2.png)


## Contact
For any inquiries or feedback, please contact [sahlabdelrahman07@gmail.com].

