import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddRoots = ({ onSubmit }) => {
  const InitialState = {
    a: null,
    b: null,
    c: null,
  };
  const [values, setValues] = useState(InitialState);

  const inputHandler = (name) => {
    return (text) => {
      setValues({ ...values, [name]: text });
    };
  };

  const pressHandler = () => {
    if (!(isNaN(values.a) || isNaN(values.b) || isNaN(values.c))) {
      onSubmit(values);
      // setValues({ ...InitialState });
    } else {
      alert('Некорректные данные!');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          name="a"
          value={values.a}
          onChangeText={inputHandler('a')}
          placeholder="a"
        />
        <TextInput
          style={styles.input}
          name="b"
          value={values.b}
          onChangeText={inputHandler('b')}
          placeholder="b"
        />
        <TextInput
          style={styles.input}
          name="c"
          value={values.c}
          onChangeText={inputHandler('c')}
          placeholder="c"
        />
      </View>
      <View>
        <Button title="Решить" color="#B95D46" onPress={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: '75%',
    margin: 0,
  },
  input: {
    width: '20%',
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 15,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#b9466a',
  },
});
