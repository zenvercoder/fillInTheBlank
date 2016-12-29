
### [Heroku](heroku.com)

* [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

* [this article](https://gist.github.com/mars/5e01bb2a074594b44870cb087f54fe2f) was helpful to get app deployed to heroku,

* After trying many different things, I read up and found that I shouldn't have deleted the public folder after all 

* From [create-react-app tutorial](https://github.com/facebookincubator/create-react-app)

### Notes

* CRUD app from [React JS Tutorial for Beginners](https://www.youtube.com/watch?v=4ZAEBxGipoA)
* for CRUD app, comment out `ReactDOM.render()` in index.js for now

* ReactDOM.render takes html and renders to a target
* React.createClass returns an object
* every single component can only return a single parent element
* to add two elements, wrap them in a div so you're just returning a single element

* property = whatever is between the tags (content)
* properties allow you to pass data to the child component
* you can pass an entire function as a property

* State = a way to customize component
* States can change (properties can't)
* whenever you want to change the state of a component variable, just call this.setState
* this.setState takes an object

* Refs = a way to get a reference to one of your child elements

* Multiple child elements 
* you can throw in a function and it will call it for each element in the array

* [React JS / Redux Tutorial](https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a)

* Each component comes with a bit of memory called state

* Store - all your application states/data (just one big JavaScript object)
* Provider - makes store available to all containers
* Containers - fetch apps state data and use it to render(display) components. Apps state will become component props. Whenever application state changes components are re-rendered(updated). The glue that connects React Components with Redux Store. 
* Components (ex: buttons, sliders, forms)
* User
* Actions - any change made to the application state (usually a user generated event, but doesn't always have to be, like a request comes back from an API call or something finishes in the background)
* Reducers - take in actions and update part of applications state (they're just functions) 





### App Concept/Steps

* Make a page that looks like an IDE
* Have code with line numbers on the side
* Have comments show up after x amt of time (longer for longer comments)
* Have a "press space" to pause

* At the end... ready to fill in the blank?
* Have option to watch again
* ready.onClick have sentences with blanks show up this time.
* Have buttons for clues
* Have review sheet so you can read it all at once if you want

* If they fill in the blank correctly, have a green underline (and a cute/fun noise?)
* If incorrect, a red underline and a cute fun noise and ask "Would you like a hint?"
* For a hint, reveal a word or something
* Scoring: 3 points right the first time, 2 points right but needed a hint, 1 point right the second time after hint

* Share to Twitter/Facebook?