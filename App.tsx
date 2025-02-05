import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text fontPreset="headingMedium">
        Hello World! This is my text component in React Native
      </Text>
    </SafeAreaView>
  );
}

export default App;
