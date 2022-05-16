<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->



# Crystal Watkins ParkMobile Code Exercse

## Description 

This is written in JavaScript and implemented with React and used Bootstrap for styling. 
When you open the app, you will see I changed the favicon to a girl coding on a computer along with a simple name for the project. I have also used a basic header. If I had more time, I would have styled this page to have some sort of footer on each page.
For the information on the page, I created a simple page loader that is pulling in more than 10 user profiles from Github. I was not able to get the API call to work as seemlessly as I hoped it would, so I created a file that is pulling in the 
information from the API call on Postman. Right under the header, I have a "search bar" in the top left corner. It allows you to search users by name and is re-loading every time you type in another character. I am displaying 4 members to each 
page since each user is pulling in a user photo and found it optimal for UX (each profile is using a card to display the GitHub User's Info). Each card has the user's profile picture and directly under it is a link to their repo page that will 
open up a new browser page. The last item on each profile is a button that displays the User Detail. When you open the link to the User's Detal, you will see the User's Organizations display in a new window (in Bootstrap, I am using the Jumbotron). 
It then pulls over the image of the user, it pulls the API letting you know the user's organizations which will open in a new window. Then the type of Github user is defined below and the last link is the API for each user's repos that are on their 
Github which opens in a new link. Ideally, for the jumbotron, I would have loved to have a back button on the user detail section that would then take you back to the list of users. And I would have done that for each webpage that opens instead of 
opening in a new window (or added that into the navbar). Once you are back on the "main page" with all users, you will see at the bottom of the page, it has a paginator that is loading additional users as you go through the pages. If you are on Page 1, 
it will disable the "First" and "Previous" buttons and if you are on page 8, it will disable the "Next" and "Last" buttons. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [MIT License](#mit_license).
* [Badges](#badges).
* [Contributing](#Contributing)
* [Tests](#Tests)


## Installation

1. Clone the repo
2. In the terminal, type "npm start"

[Link to Code](https://github.com/CrystalWatkins/park_mobile_).

## Usage 

This simple HTML file uses best practices for accessibility in programming.

[Link to Code](https://github.com/CrystalWatkins/park_mobile_).
 
[********************************************FIX]

## MIT_License

Copyright (c) [2020] [Crystal Watkins]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

![GitHub followers](https://img.shields.io/github/followers/CrystalWatkins?style=social)

## Contributing

Not currently taking any additional contributions at this time.

## Tests

There is no test needed for this project. 


