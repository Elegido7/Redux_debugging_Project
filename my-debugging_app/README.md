Checkpoint Description:

BUGS

1.  The buggyCounter file imports ZoroDisplay file that uses 'Counter' instead of 'Count'. This causes the count to fail.
2.  The count in buggyCounter is concatenated/ linked together with a string '0'. That is why on the web counter has '00' instead of '0'.
3.  The increment logic in BuggyCounter doesn't change the state because after setCount ((prev) => prev) the second previous lack increment.
4.  In App.js the empty tags <></> wrapping tag are unnecessary since span is inside the <p> tag that has no content in it.

Solution

1. in buggyDisplay 'count' was updated to counter to match the source file zoroDisplay.js
2. the count + '0' which now reads as Counter had the '0' removed.
3. The increment logic in buggyCounter was updated to setCount((prev) => prev + 1) to add after the click.
4. The empty tags <> were deleted.

Project requirements

The project aims to debug a sample React application using the React Developer Tools browser extension or standalone application. The application contains components with state and props, and the goal is to identify and fix any issues encountered during the debugging process.

    Guidelines

        Set up the sample React application provided to you. You can use a simple application with multiple components, state management, and props passing.
        Already installed the React Developer Tools browser extension or standalone application.
        Used the React Developer Tools to inspect the components tree of the sample application.
        Identified any issues such as incorrect state values, missing props, or unexpected component behavior.
        Used the tools and features provided by the React Developer Tools to diagnose and fix the issues encountered.
        Documented the debugging process, including any steps taken and solutions implemented to resolve the issues.
        Verified that the application functions correctly after debugging and ensure that any identified issues have been addressed successfully.

# Getting Started with Create React App

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
