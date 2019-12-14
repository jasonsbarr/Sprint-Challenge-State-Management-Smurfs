1. What problem does the context API help solve?
-   Prop drilling
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-   Actions tell the reducers how to update the state, passing along the data to do so if it is needed.
-   Reducers are pure functions that take the current state and an action, and apply the action to derive the new state. Then they return the new state to be saved in the store.
-   The store holds the application-level/global state in one place so it's accessible by all parts of the app that need it.
-   The store is a single source of truth because it's used to determine when components that depend on global state update. When a new state is derived and placed in the store, the components are then updated accordingly. State does not depend on the components themselves; it is the other way around.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
-   Application state is any state that is needed throughout the whole app in order for it to function. Component state is state that's confined locally to a particular component or component's tree. Use depends on need - if something is needed throughout multiple component trees, it is a good candidate for application state.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-   `Redux-thunk` allows asynchronous updates to the state within the action dispatching process. Instead of having action creators dispatch their actions directly, to use `redux-thunk` we have the action creators dispatch a partially-applied function that will be applied fully when the asynchronous call resolves.
5. What is your favorite state management system you've learned and this sprint? Please explain why!
-   The combination of Context with the `useReducer` hook is my favorite. I prefer to keep things as modular as possible and use as few globals as possible, and Context lets you localize state to a particular component tree if needed whereas with Redux everything in the store is fully global. 
