# 📱 REACT - Phone Catalog

This project is a code test proposed by GuideSmiths for a Frontend developer selection process. The challenge is to create a phone catalogue app.

## Minimum requirements

- A **REST API** providing phone´s information.
  - It can be implemented in whatever language you are most comfortable with (NodeJS / Rails / Java, ...).
  - It should have at least one endpoint:
    - Method: GET.
    - Path: */phones*.
  
- A **REACT APP** allowing the user to browse the phones catalog.
  - The look and feel should not be super sophisticated, but it should be decent and somehow responsive so that it doesn´t look terrible on a mobile phone.
  - The home page should display the list of phones. Make sure to display images of them.
  - It should be possible to select a given phone and obtain the phone details view displaying a few more info about that phone.
  - The phone´s information should be retrieved from the above described API.
  - There should be a spinner or placeholder component while the REST API request ongoing and the app is waiting for phones data.

## 🚀 Getting started
### Pre-requeriments

You need to have either ```Node``` or ```Docker```previously installed in your computer.

To start using this project, clone this repo to a new directory.
```https://github.com/conchaasensiomr/react-phone-catalog.git```

#### ➡️ Node

You have to go to server and run npm install in order to install the necesary dependencies.
```cd server``` ```npm install```
Now you need to do the same thing on the client side.
```cd client``` ``` npm install ```

Once you have installed the dependencies, you are ready to run the app with ```npm start ```. Like above, we need to do it both in server and client sides.
```cd server``` ```npm start```
```cd client ``` ```npm start```

#### 🐳 Docker

In case you are using Docker, first of all you need to write the following commands on your terminal:
```docker-compose run server npm install```
```docker-compose run client npm install```

Once we have it installed, we introduce this command to run the app: ```docker-compose upp```

## ⚒️ Process

### Building the REST API

I have faced some challenges along the app building process. One of them at the very beginning, which was using a REST API implemented in NodeJS. 

Up to now I have always used public APIs to get the requested information. Therefore, the first challeng I had to face was to provide the phone´s information using NodeJS.

In this case, I have chosen ```Express```to create a REST API with a ```GET``` endpoint.

Once I have my js file, in this case, ```api-server.js```, I import the Express framework:
```javascript
const express = require('express');
```
Now, I create the Express app:
```javascript
const app = express();
```
And set our port, which in this case is 4000, since port 3000 is being used by App.js.
```javascript
const port = 4000;
```
Now we can create the ```GET``` endopoint:
```javascript
app.get('/phones', (req, res) => {
  res.send(phonesFromApi);
});
```
At this point, we start our clients:
```javascript
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/phones`);
});
```

At this point, I discovered something called ```CORS```. If you are not yet familiar with it, but you would like to, [click here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for further information. For now, let´s just install the middleware and configure it:
```javascript
$ npm install --save cors
```
We will be using the ```phones JSON```to store our collection of phones, simulating a database.
```javascript

let phonesFromApi = JSON.parse(fs.readFileSync('./phones.json'));
```
Finally, we create an endpoint where we have our JSON response with all the phones from the API:
```javascript
app.get('/phones', (req, res) => {
  res.send(phonesFromApi);
});
``` 

### Retrieving data from API

Once we have our API working, the next step is to retrieve the data from it. We do it through ```api.js```file located in ```client/src/services/api.js```. We export a function with a fetch inside, which will be called later from our App component:
```javascript
const getDataFromAPi = () => {
  return fetch('http://localhost:4000/phones').then((response) =>
    response.json()
  );
};

export default getDataFromAPi;
```

### Fetching data and Updating State with Hooks.









### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
