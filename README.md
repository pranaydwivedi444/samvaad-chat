# SAMVAAD Real Time Chat

SAMVAAD Real Time Chat is a full-fledged Firebase Chat Application built with React and Chat Engine. It includes social authentication using Firebase, online statuses, great design and functionality, image support, sound notifications, the ability to create multiple rooms, and much more.

## Features

- Social authentication using Firebase with Google and Facebook
- Online statuses to see when users are online or offline
- Image support to share images within chat messages
- Sound notifications when receiving new messages
- Ability to create and join multiple rooms
- Easy integration with Chat Engine REST APIs
- Secure environment variables for sensitive information

## Technologies Used

- React for building the front-end user interface
- Chat Engine for building the chat functionality
- Firebase for user authentication and real-time database
- React Context API for managing the application state

## Installation

To run this application locally, you need to have Node.js and npm installed on your machine. Once you have these installed, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the project directory and run `npm install` to install the dependencies
3. Create a new Firebase project and enable Google and Facebook authentication
4. Create a new Chat Engine project and configure the Firebase authentication credentials
5. Create a `.env` file in the project root directory and add the Firebase and Chat Engine credentials as environment variables
6. Run `npm start` to start the development server

## Usage

Once the development server is running, you can access the application at `http://localhost:3000`. From there, you can sign in using your Google or Facebook credentials, create or join chat rooms, and start chatting with other users.

## Deployment

To deploy the application, you can use a hosting service such as Firebase Hosting or Heroku. Make sure to set up your environment variables on your hosting platform and configure your deployment settings accordingly.

## Contributing

Contributions to this project are welcome and appreciated! To contribute, please fork the repository and create a new pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
