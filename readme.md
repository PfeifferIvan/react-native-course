## General Notes regarding the framework

- To run the app on my physical device open Expo Go app and then run "npm start" on terminal.

- Native apps are strciter than WEB

- Content must be inside components that can displayed. eg "Hello World" should be inside a Text component.

- Inject js code by {}.

- .map will do something to each element of the array.

- ScrollView takes the size of the parent element, therefore its prefered to be nested inside a View element. (It renders every item at the beginning.)

- To show react that an item is pressable you should let react native know by adding Pressable. s

## Styling

- Inline Styles or StyleSheet Objects (not css).
- Inline Styles style={{}}.
- There are some difference between iOS and Android.
- There is no cascading.
- For multiple screen apps you can add the background color in the app.json.

### Layouts

- FLexbox how elements are positioned inside containers.
  - Cross Axis (x) and Main axis (y)
  - useful Link https://reactnative.dev/docs/flexbox
  - flex=1,2,3 add space and determines how much space each item uses.
  - SafeViewArea is a very useful component to respect the build in components of the phone.

### Handling Events

- eventListeners, useState, onChangeText (passes each keystroke.)
- useState const [variable, function] = useState(InitialValue)

### Images

- Images can be styled and source must call the require function.

### Buttons

- on Android Elevation provides a shadow and android_ripple a feedback.
- on iOS shadow has 4 properties and for the feedback

### Components

- For replicating kind of a cascade effect, you can pass style as a prop to a component.

### Icons

- Expo has "@expo/vector-icons" as a library.

### Dimensions API

- .get() window or screen. iOS is the same but android windows does not contain the status bar.

### Navigation

- There are several navigator packages.
- Stack needs to be created with createNativeStackNavigator()
- navigation prop is passed to screens created by Stack.Screen
- navigation.navigate("Name_screen") is used to tell where to navigate.
- initialRouteName can be added to set default screen.
- useNavigation is also able to set up the navigation object in any component.
- route.params is used to retrive the object passed to the screen. useRoute provide the route to any component.

# Drawer

- navigation.toggleDrawer() can be implemented to open the drawer from outside the header.

### Redux & Context

- we only use context or redux, not both.
- createContext({object of properties and methods needed}).
- create a componentProvider and pass value object.

### https requests and firebase

- Firebase is a cloud hosted db.
- base URL + {node}.json
