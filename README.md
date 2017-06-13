# survey-cub
A basic survey app.


### React, Webpack 2, React Router v4

#### Issues
1. Routing became a pretty consistent issue that I'll need to fix in the future by either switching to React Router v3 or rewriting some of the components due to this issue:
https://github.com/ReactTraining/react-router/issues/4751

2. The second issue is that when entering data into the input element, the component is rerendered due to the state update loop, and by it being a stateless component.

3. Moving between questions is inconsistent due to the routing/state management issues

State is maintained by passing a callback from Survey to Question, which fires when a change or click event is fired.
