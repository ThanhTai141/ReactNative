import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function MinMax() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [numberC, setNumberC] = useState('');
  const [result, setResult] = useState('');


//   const handleMax = () => {
//     const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
//     const max = Math.max(...numbers);
//     setResult(` Max: ${max}`);
//   };
//   const handleMin = () => {
//     const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
//     const min = Math.min(...numbers);
//     setResult(`Min: ${min}`);
//   }

  const handleMax = () => {
    const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    setResult(`Max: ${max}`);
  };
  
  const handleMin = () => {
    const numbers = [parseInt(numberA), parseInt(numberB), parseInt(numberC)];
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    setResult(`Min: ${min}`);
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
      <TextInput
        value={numberC}
        onChangeText={(text) => setNumberC(text)}
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter number c"
      />
      <Button title="Min" onPress={handleMin} />
      <Button title="Max" onPress={handleMax} />


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