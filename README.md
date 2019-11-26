# rn_ts_mobx_proj
React Native Login flow using Typescript and Mobx

## TL;DR about the login flow
There is no backend so AsyncStorage works as a backend. 
In order to be able to login a user has to create an account first. 
Then login with the same credentials.
There is only one account saved in the AsyncStorage, so any new account created will overwrite the previous one.

## How to run

### Clone repository:
```
git clone https://github.com/Symyon/rn_ts_mobx_proj.git
```
### Enter project root folder:

```
cd rn_ts_mobx_proj
```

### Install libraries:
```
npm install
```

### Move to iOS folder:
```
cd ios
```

### Install pods:
```
pod install
```

### Return to previous folder (root)
```
cd ..
```

### Run app on iOS simulator:
```
react-native run-ios
```
