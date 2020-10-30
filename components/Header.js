import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "seaerch here"
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>Eilmark</Text>
                <TextInput style={styles.input}
                           value={this.state.search}
                           onChangeText={(search) => this.setState({search})}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: 200,
        paddingTop: 38,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    title: {
        color: "#0f1631"
    },
    input: {
        backgroundColor: "#f5f8fd",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        height: 44
    }
});

export default Header;