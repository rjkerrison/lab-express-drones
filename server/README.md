![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Basic CRUD with Drones

## Introduction

![Amazon Prime Air drone](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_926e75d45f2a997152f4401844b3b4d5.jpg)

The goal of this exercise is to create a basic REST API using Express.

You should be able to use basic Mongoose methods to Create, Read, Update, and Delete documents in a collection in the database.

The API will allow a user to keep track of their drones collection.
Users should be able to receive a list of their existing drones (which you will seed using previously gained knowledge), add new ones to their collection, update them as well as delete them when they no longer use them.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0 | Initialize the project

This project has already a familiar structure: there are bin, models, routes, config, and an _app.js_ file with lots of middleware that "glue" different parts of this application to be able to work together as one.

After forking and cloning the project, you will have to install all the dependencies:

```shell
$ npm install
```

To run the app:

```shell
$  npm run dev
```

Now you are ready to start. 🚀

### Iteration 1 | Seed the database

The first step is to **create the `Drone` model** and **seed some initial drones** in our database.

The `Drone` model should have:

- `name` - String (name of the drone model, like _General Atomics MQ-9 Reaper_)
- `propellers` - Number (amount of propellers, like _4_)
- `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

Steps you should follow in this iteration:

1. Go to the `Drone.model.js` file in the `models` folder. Use Mongoose schema and make sure that the Drone model has all the properties listed above. _Hint_: Don't forget to export the Drone model.
2. In the `seeds/drones.seeds.js` file:
   - Create an array of 3 objects, each with `name`, `propellers` and `maxSpeed` as our initial drones.
   - Establish a connection to the database. You can use the same code in `db/index.js`.
   - Once the database connection is established, call the `Drone` model's `.create()` method with the array as an argument.
   - If the `.create()` method successfully creates the _drones_ collection, output (using _console.log()_) how many drones have been created. In case, the seeding of the database fails, catch the error and output it.
3. Run the seed file with `node` to seed your database.
4. Check if the _drones_ collection is successfully created through the Compass and check the output in the terminal.

_Hint 1_: In case you are struggling with drones' characteristics, you can use this array in your seed file:

```javascript
const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]
```

_Hint 2_: Don't forget to close the connection with the database after you have seeded the database. You are familiar with `mongoose.connection.close()` approach, but you can also check the `.disconnect()` Mongoose method. Click [here](https://mongoosejs.com/docs/api.html) to search through Mongoose docs.

## Iteration #2: List the drones

Now that the drones are in the database, you can start working with them.
Let's **send a list of all the drones**.

Here is the route you will be using:

| Route     | HTTP Verb | Description     |
| --------- | --------- | --------------- |
| `/drones` | GET       | Send all drones |

Steps you should follow in this iteration:

1. Find the `/drones` GET route in `routes/drones.js`.
2. Use the Mongoose `.find()` method to retrieve all the drones.
3. Return the found drones as a list to the user.
4. In case of errors, catch them and call `next(error)`.
5. Test your endpoint in Postman.

## Iteration #3: Add a new drone

Now that we have a list of drones, you can focus your attention on **saving new drones to the database**.

Here are the routes you will be using:

| Route     | HTTP Verb | Description                  |
| --------- | --------- | ---------------------------- |
| `/drones` | POST      | Save a drone to the database |

Steps you should follow in this iteration:

1. Locate the `/drones/` POST route in `routes/drones.js`.
2. Extract from `req.body` all the info the frontend (or postman) has submitted through a form.
3. Use this info to create a new drone in the database in the _drones_ collection.
4. If the new drone is successfully created, give a `201 CREATED` response with the new drone.
5. If there is an error, return a `400 BAD REQUEST` and give the user a message which indicates what is wrong, whether they've missed a field or given the wrong value.
6. In Postman, test test test!

## Iteration #4: Update the drone

You can create and list (read) drones, so it is time to proceed to make sure you can **update existing drones**.

Here are the routes you will be using:

| Route          | HTTP Verb | Description                        |
| -------------- | --------- | ---------------------------------- |
| `/drones/:id/` | POST      | Save updated drone to the database |

Steps you should follow in this iteration:

1. Set yourself up a postman request for `POST /drones/:id/`. Fill the id variable with an existing drone id.
2. Locate the `/drones/:id/` POST route in `routes/drones.js`.
3. Extract from `req.body` all the info user submitted through the frontend/postman.
4. Use this info to update the existing drone in the database.
5. If the new drone is successfully updated, send a `200 OK` response with the updated drone.
6. If there is an error, send a `400 BAD REQUEST` with an error message that indicates what to do to fix the sent data.
7. If the drone with the sent id does not exist, send a `404 NOT FOUND` with a message that says the drone cannot be found matching that id.

## Iteration #5: Delete the drone

You have CRU out of CRUD. It is time to allow users to **remove drones** they don't need anymore.

Here is the route you will be using:

| Route          | HTTP Verb | Description                               |
| -------------- | --------- | ----------------------------------------- |
| `/drones/:id/` | DELETE    | Delete a specific drone from the database |

Steps you should follow in this iteration:

1. Find the `DELETE /drones/:id/` route in `routes/drones.js` and using `.findByIdAndDelete()`, destroy the document with the given ID from the database.

## Bonus: A Frontend

Following the practice of calling the API from the frontend with `fetch` or `axios`,
create a small webpage that can show all the drones to the user.
Add some basic styling.

You can go further and create forms for creating and updating, as well as a button for deleting.

**Happy coding!**
