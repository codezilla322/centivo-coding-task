# Node.js API + MongoDB

## Overview
This is a simple Node.js Express API that connects to a MongoDB database and retrieves user data based on ID.

## Features
- Fetch user by ID (`/users/:id`)
- Only returns users with `age > 21`
- Handles invalid ObjectId errors gracefully
- Returns `404` if user not found

## Installation

1. Clone this repository:  
`git clone `

2. Install dependencies:  
`npm install`

3. Add a `.env` file:  
`MONGO_URI=mongodb://127.0.0.1:27017/centivoDB`  
`PORT=3000`

4. Start the server:  
`npm start`


## API Usage

### Get User by ID
- **Endpoint:** `GET /users/:id`
- **Example Request:** `GET /users/65a1b2c3d4e5f6g7h8i9j0k1`
- **Responses:**
- `200 OK`: Returns user details if found and age > 21.
- `400 Bad Request`: Invalid user ID format.
- `404 Not Found`: User not found or under 21.
