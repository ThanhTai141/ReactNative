import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const sum = parseInt(numberA) + parseInt(numberB);
    setResult(`Sum: ${sum}`);
    
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        value={numberA}
        onChangeText={(text) => setNumberA(text)}
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number a"
      />
      <TextInput
        value={numberB}
        onChangeText={(text) => setNumberB(text)}
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number b"
      />
        <Button title="Sum" onPress={handleSum} />


      <Text style={{ fontWeight: 'bold', fontSize: 20,marginTop: 20 }}>Result: {result}</Text>
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