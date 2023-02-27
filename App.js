import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

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
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={() => {
            Alert.alert(this.state.content);
          }}
        >
          <View style={styles.box}>
            <Text style={styles.first}>시작하기</Text>
            <StatusBar style="auto" />
          </View>
        </TouchableOpacity>
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
