1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .slice ,... the spread operator is just building off an existing array.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

an action is an object that we can send to the reducer to tell it how to deal with the incoming information

reducers filter an action and tell it what to connect to.

the store is the 'single source of truth' because it contains the state of the object and can be spread throughout our application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state of the application, the state of a component is stored individually aside from the application. without this everything would happen on the state of the application

1.  What is middleware?

middleware processes the information from actions and the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that lets us return actions to functions.
our actions creators work on individual parts of the application and not through the entire application.

1.  Which `react-redux` method links up our `components` with our `redux store`?

react-redux lets us connect our components to the redux store
