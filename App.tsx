import theme from '@theme/index';
import {StatusBar} from 'react-native';
import {Routes} from './src/routers';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </>
  );
}
