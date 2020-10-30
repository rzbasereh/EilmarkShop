import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import Header from './components/Header';
import {globalStyles} from "./styles/global";
import Home from "./containers/Home";
import TabNavigator from "./components/Navigator";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabNavigator/>
        );
    }
}

export default App;
