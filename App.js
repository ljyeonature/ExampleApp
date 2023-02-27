// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import StartButton from './components/StartButton.js';

export default class App extends React.Component {
  state = {
    content: '',

  };
render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="여기에 입력해주세요." 
          onChangeText={text => {
            this.setState({ content: text });
          }} 
        />
        <StartButton 
        showAlert={() => Alert.alert(this.state.content)} 
        disabled={this.state.content.length > 0 ? 0 : 1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flexDirection:'row',
    backgroundColor:'#6830cf',
    padding: 16,
  },
  first: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    padding:16,
  },
  input: {
    width:'100%',
    textAlign:'center',
    marginBottom:16,
  },
});
