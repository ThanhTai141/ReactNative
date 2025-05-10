import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [change, setChange] = useState(false);

    const Login = () => {
        alert('Login pressed');
    }
    const cancel = () => {

        alert('Cancel pressed');

        setUsername('');
        setPassword('');
        setChange(false);

     
    }

 
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://miro.medium.com/v2/resize:fill:1200:632/g:fp:0.51:0.52/1*-frikwWyOJ2xkIz-9Tff0A.jpeg' }}
          style={{ width: 200, height: 200,marginBottom: 20 }}
        />
        <TextInput
          style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
        />
        <TextInput
          style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          placeholder="Password"
            onChangeText={text => setPassword(text)}
          secureTextEntry={true}
            value={password}
        />
        <Button title="Login" onPress={ Login} />
        <Button title="Cancel" onPress={ cancel} />

        <StatusBar style="auto" />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});