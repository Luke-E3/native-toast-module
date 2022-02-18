import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { show } from 'native-toast-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {show("Native Toast!")}}
        title="Show Toast"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
