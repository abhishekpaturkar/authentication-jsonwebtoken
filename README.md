# User authentication using Jsonwebtoken

User Authentication with ExpressJS, Mongoose, JSON Web Token, and MongoDB 


## Description

This project provides a simple user authentication system with a login and sign-up page. It utilizes ExpressJS as the backend framework, Mongoose as the ODM (Object Data Modeling) library for MongoDB, the JSON Web Token (jsonwebtoken) library for secure user authentication, EJS (Embedded JavaScript) for rendering dynamic views on the frontend, and MongoDB as the database for storing user information.

## Features

- **User Registration:** Allows users to sign up with a unique username and password.
- **User Authentication:** Validates user credentials during login using JSON Web Tokens.
- **Secure Password Storage:** Safely stores user passwords using encryption techniques provided by Mongoose.
- **MongoDB Integration:** Utilizes MongoDB as the database for storing user information.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhishekpaturkar/authentication-jsonwebtoken.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Auth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB:
   - Create a MongoDB database.
   - Update the MongoDB connection string in the `db/db.js` file.
  ```MongoDB
    exports.connectMongoose = () => {
    mongoose
      .connect("MongoDBURL")
      .then((e) => console.log(`Conneccted to mongoDB: ${e.connection.host}`))
      .catch((e) => console.log(e));
};
```
     

5. Start the server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Configuration

- Add `config.js` file in main folder and add the `KEY` for your jsonwebtoken

```javascript
// config.js

module.exports = {
  // Other configurations...
  KEY: 'YOUR-KEY',
};
```

## Usage

1. Open the application in your browser.
2. Register a new user using the sign-up page.
3. Log in with the registered user credentials.
4. Explore and integrate the authentication system into your own projects.

## Dependencies

- [ExpressJS](https://expressjs.com/): Minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): JSON Web Token implementation.
- [MongoDB](https://www.mongodb.com/): NoSQL database.
- [EJS](https://ejs.co/): Embedded JavaScript templating.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback and suggestions are highly appreciated.

## Acknowledgments

- Special thanks to the authors and contributors of the dependencies used in this project.

## Contact

For any questions or feedback, please contact [paturkarabhishek03@gmail.com](mailto:paturkarabhishek03@gmail.com).

Happy coding!
