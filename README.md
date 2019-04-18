# curren\$ee budgeting app made with the MERN stack

_This app is designed to help the end-user monitor and manage all of his expenses and investments through a secure browser application._

### Link to deployed project:

[View on Heroku](https://pacific-ridge-46060.herokuapp.com/)

~~_Since Heroku mLab Sandbox uses MongoDB version 3.6 we lost some functionality of our data table with this deployment. A few aggregation pipeline operators we used are exclusive to version 4.0+. Part of the backend will need to be rewritten to compensate._~~

**UPDATED 4/13/2019: Removed MongoDB 4.0 dependency**

### NEW FEATURES (4/17/2019)

- **Table Pagination**
- **New Data Visualization: Line Chart**
- **Export Budget as CSV**
- **Date Picker (no more typing dates!)**
- **Recurring Transactions (up to 6 months forward from starting date)**
- **Toast Notifications**
- **Error Handling**
- **Walmart searches can be added to budget, default date is now, default category is shopping. API request needs to be routed differently to avoid CORS issue. Current implementation is slow.**

### TODO

- [x] Rewrite logic for chart data to account for years. COMPLETED 4/17/2019 **Time based charts only account for current year.**
- [ ] Global table filtering.
- [ ] Sum totals with custom filters.
- [ ] Edit table cells.
- [ ] Data visualization by single category over time.
- [x] Data visualization for budget total breakdown by category for a singular month. ADDED 4/18/2019 **Dougnut chart for spending by category for current month.**
- [ ] Wegman's API.
- [ ] Google OAuth.

## Overview

The overall project was developed with the highest industry standards in mind, in terms of widely accepted notions in the developer world. We made sure to organize ourselves with a the MVC model (Models Views Controllers) in order to ensure the skillset we gained would be applicable to the real world. In addition, we chose to create a true single page application with the use of react-router-dom and express. With these goals in mind, we felt we met our personal goals to foster a product that utilizes the latest technologies with the added benefit of scalability.

## Front-End

A users' experience can only be as good as the technology in the User Interface. For this reason we used a commbination of Reactstrap and Material UI. Both being the most popular and relevant libararies in the current tech environment. Especially because of the rise in popularity of React and their component based coding model which emphasizes modularity; for a better user and developer experience.

![currensee-new](https://user-images.githubusercontent.com/42519030/56330569-98ca7e80-6156-11e9-816c-ba9e3b94d71d.jpg)

![currensee-chart](https://user-images.githubusercontent.com/42519030/56330618-cdd6d100-6156-11e9-9a2d-33d7cfe2150b.jpg)

## Back-End

The goal of our backend was optimization in order to lighten the load for our front-end. We used MongoDB to it's full potential to sort, group, and aggregate our data. In doing so, we were able to create API routes that are seemingly complex, without the sacrifice of front-end efficiency.

![image](https://user-images.githubusercontent.com/11838797/49107896-da649680-f254-11e8-936d-b10adc2ce442.png)

### Technologies Used:

- **React**
- **React-Router**
- **Node.js**
- **Material UI**
- **Prime-React**
- **Chart.JS**
- **MongoDB**
- **Express**
- **Axios**
- **React-Moment**
- **Passport**
- **Mongoose**
- **reactstrap**
- **Concurrently**
