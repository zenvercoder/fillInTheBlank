[Link](https://fillintheblankreact.herokuapp.com/) to live site

### [Heroku](heroku.com)

* [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

* ]this article](https://gist.github.com/mars/5e01bb2a074594b44870cb087f54fe2f) was helpful to get app deployed to heroku,
particularly this line: `echo '{ "root": "build/" }' > static.json` (I put it in package.json)

* After trying many different things, I read up and found that I shouldn't have deleted the public folder after all 

* From [create-react-app tutorial](https://github.com/facebookincubator/create-react-app)
* Help from [React JS Tutorial for Beginners](https://www.youtube.com/watch?v=4ZAEBxGipoA)

### Notes

* ReactDOM.render takes html and renders to a target
* React.createClass returns an object
* every single component can only return a single parent element

* to add two elements, wrap them in a div so you're just returning a single element

