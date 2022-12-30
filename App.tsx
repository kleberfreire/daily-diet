import theme from '@theme/index';
import {StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={theme}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{}}>Home</Text>
        </View>
      </ThemeProvider>
    </>
  );
}
