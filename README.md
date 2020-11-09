# 📱 REACT - Phone Catalog

This project is a code test for a Front-end developer selection process. The challenge is to create a phone catalogue app.

The minimum requeriments were to have a **REST API** providing phone´s information and implemented using NodeJS/Rails/Java... I chose NodeJS. It also must have a **REACT APP** allowing the user to browse the phones catlog.

## 🌐 Link to the App.

Should you like to take a look to the deployed app, [here you have the link](https://afternoon-mesa-14215.herokuapp.com/#/).

> ℹ️ Please note that the first time you open the browser, it takes awhile to load.

---
## 🗂️ Content

1. [Project Structure](#-project-structure)
2. [Process](#️-process)
   1. [Back-end](#️-back-end)
   2. [Front-end](#-front-end)
3. [Getting started](#-getting-started)
   1. [Pre-requeriments](#pre-requeriments)
   2. [Node](#️-node)
   3. [Docker](#-docker)
4. [Author](#-author)
***

## 🧱 Project structure

```
/
|
|– client
|   |– src
|     |– components
|     |– services
|     |– stylesheets
|– server
```

> 👉 The project is divided into 2 parts: On the one hand, ```client```, which contains the React App. On the other hand, ```server```, which has the REST API coded in Node.js. 

## ⚒️ Process

### 🗄️ Back-end
***
```
/
|– server
|   |– api-server.js
|   |– phones.json
```

### ✳️ Building the REST API

I have faced some challenges along the app building process. One of them at the very beginning, which was using a REST API implemented in ```NodeJS```. 

Up to now I have always used public APIs to get the requested information. Therefore, the first challeng I had to face was to provide the phone´s information using NodeJS.

In this case, I have chosen [```Express```](https://expressjs.com/es/) to create a REST API with a ```GET``` endpoint.

At this point, I discovered something called ```CORS```. If you are not yet familiar with it, but you would like to, [click here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for further information.

We retrieve the data from a [JSON file](server/phones.json) that I created, that contains all the information relating to phones.

### 💫 Front-end
***

```
/
|
|– client
|   |– public
|   |– src
|   |– components
|      |– _tests_
|   |– services
|   |– stylesheets
|      |–components
|      |–core
|      |–layout
|   |– index.js
|   |– index.scss
```

### ✳️ Using React Hooks.

I have buld this app using functional components from React. As you could see, I have used the hooks ```useState``` and ```useEffect```, linked to the component´s state and life cycle. 

### ✳️ React Router
You could see in [**index.js** file](client/src/index.js) that App component is contained within another component, named *HashRouter*. This is because I have used [**React Router**](https://reactrouter.com/) to specify the routes in the app using my React components.

Once the routes are declared, I can link the different components using *Link*.

### ✳️ Filter and Loader components

```
/
|
|   |– components
|      |–Filter.js
|      |–Loader.js
```
In addition to "basic" componets wich make up the app, we also can find the [*Filter*](client/src/components/Filter.js) component, which allows users to filter the phones by manufacturer; and [*Loader*](client/src/components/Loader.js) component, which gives users some extra information while app is waiting to get the data to render.

### ✳️ SASS and BEM

I have used SASS and BEM naming convention to give styles to the components, so that I have a more organized and clearer styles system.

### ✳️ Responsive design

I have followed the "mobile first" design principle as building this project, coding first as the app was being used on a mobile phone and then, using media queries to adapt the view to different devices. In this case, [tablet and desktop](client/src/stylesheets/core/_mixins.scss).

### ✳️ Testing with React Testing Library

I am really interested in all that having to do with clean code and best practices. Testing is something that I am starting to learn. Although I am not an "advanced user" regarding this practice, I wanted to try to put it into practice during this exercise. I have included [tests files](client/src/components/__tests__) for 2 of the components, using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## 🚀 How to run the Apps.

### Pre-requeriments

You need to have either [```Node```](https://nodejs.org/es/) or [```Docker```](https://www.docker.com/) previously installed in your computer.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/react-phone-catalog.git
> ```

### ➡️ Node
***

You have to go to server and run npm install in order to install the necesary dependencies.
> ```console
> $ cd server
> $ npm install
> ```
Now you need to do the same thing on the client side.
> ```console
> $ cd client
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```. Like above, we need to do it both in server and client sides.
> ```console
> $ cd server
> $ npm start
> ```

>  ```console
> $ cd client
> $ npm start
> ```

> 👉 Open http://localhost:3000 to view in the browser

Finally, to run the tests in client, you need to introduce the following commands on your terminal:
```console
$ cd client
$ npm test
```

### 🐳 Docker
***

> ⚠️ Should you are a MacOS user, please note that this process might be a bit slow. Take it into account if you are using Docker on a MAC computer.  

In case you are using Docker, first of all you need to write the following commands on your terminal:
> ```console
> $ docker-compose run server npm install
> $ docker-compose run client npm install
> ```

Once we have it installed, we introduce this command in our terminal to run the app:
> ```console
> $ docker-compose up
> ```

> 👉 Open http://localhost:3000 to view in the browser.

> Finally, to run the tests in client, you need to introduce the following commands on your terminal:
```console
$ docker-compose run client npm test
```
## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://github.com/conchaasensiomr).