1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

concat(), filter(), map(). Object.assign() creates a new object while extending the properties.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain some form of payload information, that they then pass to the reducers. The reducers 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of the app that is accessible throughout all of the components, while component state is just the local state of that component, which is only accessible by itself and its children components.


1.  What is middleware?

Middleware is a function that operates between the actions and the reducers, it interacts with the actions as they are dispatched in order to perform some form of resulting action, which can log errors and perform our axios requests.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is middleware that allows our action creators to access the dispatch() method, which allows our creators to be able to dispatch multiple actions, which is how we perform our axios requests that can do a variety of things with our data.


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()

