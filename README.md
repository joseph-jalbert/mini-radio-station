# TuneIn Lite

This is a minimal radio application that pulls down a list of stations from an API and allows the user to listen to each station. The stations have associated tag data, which is used to generate a list of suggested stations the user may prefer, based on their previous selections. The categories 'music' and 'news' were given extra weight, as they represent a broader hierarchy than genre-specific tags. Other factors in choosing a recommendation are the popularity of the station and its reliability. 

The application can be running locally using either `npm start` or `yarn start`. Given more development time, here are some things I would add or change:

**Refactoring** - move all string constants into a dedicated directory so they can be used throughout various parts of the application

**Unit Testing** - ensure the building blocks of the app do what they are supposed to do

**Accessibility** - more semantic markup, usage of aria- attributes to ensure functionality with a screen reader

**Error Handling** - Create a dedicated error banner component to be used throughout the App

**Styling** - use a CSS-in-JS library, such as Styled Components, for a more composable approach to styling

**Global data store** - Store the user's listening preferences in a global store so they can easily accessed

throughout the application as it grows. Also could be used for storing error information

**Customized REST client** for more flexible data fetching - I opted for the popular library 'react-request' as it offers good amount of features out of the box. Writing a customized client would allow for more granular control over HTTP requests, to help with implementing things like pagination, retries, more customized error handling.

**Internationalization** - using a library such as react-intl to enable multiple language support

**Additional features** - ability to sort stations, filter, search



--------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
