## General Notes regarding the framework

- To run the app on my physical device open Expo Go app and then run "npm start" on terminal.

- Native apps are strciter than WEB

- Content must be inside components that can displayed. eg "Hello World" should be inside a Text component.

- Inject js code by {}.

- .map will do something to each element of the array.

- ScrollView takes the size of the parent element, therefore its prefered to be nested inside a View element. (It renders every item at the beginning.)

## Styling

- Inline Styles or StyleSheet Objects (not css).
- Inline Styles style={{}}.
- There are some difference between iOS and Android.
- There is no cascading.

### Layouts

- FLexbox how elements are positioned inside containers.
  - Cross Axis (x) and Main axis (y)
  - useful Link https://reactnative.dev/docs/flexbox
  - flex=1,2,3 add space and determines how much space each item uses.

### Handling Events

- eventListeners, useState, onChangeText (passes each keystroke.)
- useState const [variable, function] = useState(InitialValue)
