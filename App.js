import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavBar } from './src/components/NavBar';
import { AddRoots } from './src/components/AddRoots';
import { Result } from './src/components/Result';

export default function App() {
  const [result, setResult] = useState();
  const calculate = ({ a, b, c }) => {
    const d = b ** 2 - 4 * a * c;
    if (d < 0) {
      setResult(`Корней нет, дискриминант меньше нуля D=${d} `);
    } else {
      setResult(
        `Дискриминант D = ${d}\n\nПервый корень равен: ${
          (-1 * b - Math.sqrt(d)) / (2 * a)
        }\n\nВторой корень равен: ${(-1 * b + Math.sqrt(d)) / (2 * a)}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar title="Решение квадратных уравнений" />
        <AddRoots onSubmit={calculate} />
        <Result result={result} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
