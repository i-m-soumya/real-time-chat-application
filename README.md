# Real-Time Chat Application

Welcome to the Real-Time Chat Application project! This project is a simple chat application built using Node.js, Express.js, MongoDB, and Socket.io. It allows users to join chat rooms and communicate with each other in real-time.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time communication using Socket.io
- Multiple chat rooms for parallel discussions
- Persistent storage of chat messages in MongoDB
- User authentication and identification
- Simple and intuitive user interface

## Requirements

Make sure you have the following installed before setting up the project:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd real-time-chat-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/chat-app
   ```

   Update the `MONGODB_URI` with your MongoDB connection string.

2. Optionally, configure any other settings in the `.env` file as needed.

## Usage

1. Start the MongoDB server:

   ```bash
   mongod
   ```

2. Start the Node.js server:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000` by default.

3. Open the application in your web browser and start chatting!

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed.