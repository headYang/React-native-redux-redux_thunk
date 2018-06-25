import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { RootStack } from './RootStack';
class App extends Component {
    componentWillMount() {
        const config = {
        apiKey: "AIzaSyAfU4NA2g3yw5m2Dxk_6rW0lSYfn5dBrs0",
        authDomain: "manager-51ca8.firebaseapp.com",
        databaseURL: "https://manager-51ca8.firebaseio.com",
        projectId: "manager-51ca8",
        storageBucket: "manager-51ca8.appspot.com",
        messagingSenderId: "360795612199"
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store = {store}>
                <RootStack/>
            </Provider>
        );
    }

}

export default App;