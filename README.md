# server-deployment-practice Notes

## CI & CD (continuous integration, continuous deployment)

- developers to engineer, we need to focus on automated tests
- by creating a body of automated test, gives us confidence that the code we wrote is correct and did not break something else
- unit tests and automated testing is like having a racket that pulls up buckets of water from the bottom of a well, as opposed to doing this by hand
- Continuous Integration - unit tests should run everytime you make a change within your code (ACP).
- Continuous Deployment - if the CI tests pass, your application should automatically deploy.

## Starting a project

- Node package manager (npm) is the tool we use to manage our dependencies.
- copy and paste `.editorconfig, .eslintignore, .eslintrc.json, .gitattributes` to your project directory.
- To create your `package.json` file run `npm init` in your project directory and go through the steps
- create a `index.js` and `server.js` file.
- ACP

## Dependencies

- node packages that we want to use in your project
- dependencies need to be installed in your project or else it won't work
- dev dependencies are something that we use to build/test our project, but not necessarily needed for the project to work. run `npm install --save-dev jest supertest`
- run `npm install --save -express dotenv`
- express is our server library and dotenv is our utility to keep local settings local.


## Starting a node server

- navigate to the index.js file.
- `express` is the library that builds the server.
- the `require()` scans and imports respective node_module.
- `require('dotenv`).config(); - loads the dotenv file and makes it available to the `process.env`
- `const port = process.env.PORT ?? 3000;` standard practice for starting a node server.
- grab server that you want to write- `const server = require(',/server.js')`; Using the require keyword imports the file
- `server.start(port);`

## Server.js

- `use strict;`
- `const express = require('express');`
- create a handler function: `const hello = (req, res) => { res.status(200).send('Hello, World")};`
- use express- `const app = express();`
- use the handler- `app.get('/', hello);`
- start app function- `function start(port) {app.listen(port, () => console.log(`Server listening on port ${port}`) ); }`
- export everything - `module.exports  = { start };`

## Testing

- create a new test folder `mkdir __tests__`
- name test file the same name as the file we're testing `code __tests__/server.test.js`
- assertion - check to see if something is what we expect. `expect(true).toBe(true);`
- test organization - describe, it
- `describe()` take two args- description of what we are trying to test and a callback function.
- callback function is either going to have more description lots or an it block, which is a single test case.
- a single test case, is the smallest thing we can test that gives us useful information.
- tests work in 3 parts:
    - setup tests to do the thing we want it to do: prepare the server
        `const request = supertest(server.app);`
    - perform an action: request the / route
        `const response = await request.get('/');` this response is a promise.
    - assert or expect the result of the action: expect the / route to respond with hello
        `expect(response.text).toBe("Hello, World");`
- `supertest` is the library that helps us test the server.
