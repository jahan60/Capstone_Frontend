
[Backend repo](https://github.com/jahan60/Capstone_Backend.git)

## Smart Stock Manager
Frontend:
## Introduction: 
This is the frontend of the Smart Stock Manager application. It provides a clean interface for managing products, tracking stock levels, viewing alerts, and checking analytics using AI.  

## What this Frontend does:
The frontend allowa users to:
1. Logn in securly before accessing the dashboard.
2. View a main dashboard with quick links to key sections.
3. Browse all products in the inventory
4. Add, edit and delete the products.
5. Watch for low-stock items.
6. Check simple analytics related to stock levels.
7. Navigate the pages using a sidebar and top navigation bar. 
8. All pages are connected to the backend API and update automatically based on the data returned.

## Technology Used:
React: for building the UI.
React Router: for page Navigation.
CSS: for styling
Axios: for API requests
React Hooks: for state, side effects, page navigaton and URL parameters.

## Authentication: 
The frontend includes a login page that sends user credentials to the backend. Once logged in:
1. A JWT token is stored.
2. Protected pages Dashboard, Inventory, Alerts, and Analytics require authenticaton.
Unauthorized users are redirected to the login page.