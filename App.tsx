import theme from '@theme/index';
import {StatusBar, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={theme}>
        <Text>Home</Text>
      </ThemeProvider>
    </>
  );
}
