# Fill in the Blank with React

[React Docs](https://facebook.github.io/react/docs/installation.html)


`npm install -g create-react-app
 create-react-app study-guide
 cd study-guide
   npm start`

*  It uses webpack, Babel and ESLint under the hood, but configures them for you.

* The project was built assuming it is hosted at the server root.
  To override this, specify the homepage in your package.json.
  For example, add this to build it for GitHub Pages:
  
    "homepage": "http://myname.github.io/myapp",
  
  The build folder is ready to be deployed.
  You may also serve it locally with a static server:
  
    npm install -g pushstate-server
    pushstate-server build
    open http://localhost:9000


* [Babel w webpack setup instructions](http://babeljs.io/docs/setup/#installation)

* [Webpack Getting Started](http://webpack.github.io/docs/tutorials/getting-started/)

* The webpack command-line will try to load the file webpack.config.js in the current directory.

* The development server binds a small express server on localhost:8080 which serves your static assets as well as the bundle (compiled automatically)

* [webpack docs](https://webpack.github.io/)

* [Include both DefinePlugin and UglifyJsPlugin into your production Webpack configuration](https://webpack.js.org/guides/production-build/)