# React Native Integration Notes

This document provides notes on integrating React Native for the mobile application, including navigation, storage, offline support, push notifications, and react-native-web.

## Navigation
- **Library:** [React Navigation](https://reactnavigation.org/) will be used for routing and navigation.
- **Navigators:**
    - **Stack Navigator:** For managing a stack of screens.
    - **Tab Navigator:** For creating a tab bar at the bottom of the screen.
    - **Drawer Navigator:** For creating a slide-out drawer from the side of the screen.

## Storage
- **Library:** [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) will be used for persistent key-value storage.
- **Use Cases:**
    - Storing user preferences.
    - Caching data for offline use.

## Offline Support
- **Library:** [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo) will be used to detect the network connection status.
- **Strategy:**
    1.  Cache data locally using AsyncStorage.
    2.  When the app is offline, read data from the cache.
    3.  When the app is back online, sync local changes with the server.

## Push Notifications
- **Service:** [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging) will be used for push notifications.
- **Library:** [React Native Firebase](https://rnfirebase.io/) will be used to integrate with FCM.
- **Implementation:**
    1.  Request permission from the user to receive push notifications.
    2.  Get the device's FCM token.
    3.  Send the token to the server to be stored.
    4.  Handle incoming notifications when the app is in the foreground, background, or closed.

## React Native Web
- **Library:** [React Native for Web](https://necolas.github.io/react-native-web/) will be used to share code between the web and mobile applications.
- **Strategy:**
    - Create a shared `src/components` directory for components that can be used on both web and mobile.
    - Use file extensions (`.web.js`, `.native.js`) to create platform-specific versions of components when necessary.
    - Use a monorepo structure with Turborepo to manage the shared code.
