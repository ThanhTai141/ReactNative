import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

interface TodoItem {
  id: number;
  text: string;
}

export default function TodolistApp() {
  const [text, setText] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  const addTodo = () => {
    if (text.trim() === '') {
      return;
    }
    setTodos([...todos, { id: id, text: text }]);
    setText('');
    setId(id + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (editingText.trim() === '') {
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Todo List App</Text>

      <TextInput
        placeholder="Add a new task"
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={addTodo} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={{ fontSize: 16, fontWeight: 'bold',maxWidth:'80%' }}>{item.text}</Text>
            {editingId === item.id ? (
              <TextInput
                style={styles.textInput}
                value={editingText}
                onChangeText={setEditingText}
              />
            ) : null}
            <Button  title="Delete" onPress={() => deleteTodo(item.id)} />
            {editingId === item.id ? (
              <Button title="Save" onPress={saveEdit} />
            ) : (
              <Button title="Edit" onPress={() => startEditing(item.id, item.text)} />
            )}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    gap: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    flex: 1,
    marginRight: 10,
  },
});