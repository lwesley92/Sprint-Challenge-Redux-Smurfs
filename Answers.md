Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
concat(), filter(), map(). Object.assign() creates a new object while extending the properties.

Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are objects that contain some form of payload information, that they then pass to the reducers. The reducers take any actions that are dispatched and deals with the necessary data and replaces the current state within the store. The Store is where our current and previous states are held, and it is known as a single source of truth because the app changes based upon what happens to the state itself.

What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the global state of the app that is accessible throughout all of the components, while component state is just the local state of that component, which is only accessible by itself and its children components.

What is middleware?
Middleware is a function that operates between the actions and the reducers, it interacts with the actions as they are dispatched in order to perform some form of resulting action, which can log errors and perform our axios requests.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
It is middleware that allows our action creators to access the dispatch() method, which allows our creators to be able to dispatch multiple actions, which is how we perform our axios requests that can do a variety of things with our data.

Which react-redux method links up our components with our redux store?
connect()

