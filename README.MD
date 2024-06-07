# Node.js URL Shortener

A simple URL shortener web application built with Node.js. This app allows users to shorten long URLs and access them through a short alias.

## Features

- Shorten long URLs
- Redirect to original URLs using the short alias



## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Mayanksaini1234/Node_URL_Shortner.git
   cd nodejs-url-shortener

 2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

- `POST /api/short/url` - Create a short URL
- `GET /api/short/:ShortId` - Visit to webiste by that short Url and Updateing the Analytics
- `GET /api/short/analytics/:ShortId` - Visit the Analytics 

