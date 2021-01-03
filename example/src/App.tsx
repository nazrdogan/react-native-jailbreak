import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Jailbreak from 'react-native-jailbreak';


export default function App() {
  const [result, setResult] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    Jailbreak.check().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result1: {result?.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
