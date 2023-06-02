import { Routes } from './src/routes/index'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { StatusBar } from 'react-native';
// // import { PaperProvider } from 'react-native-paper';

export default function App() {

  // const isFirstOpen = (storageManager.getData('@firstOpen'));
  // const isLoggedIn = (storageManager.getData('@loginData'));


  const initialRoute = 'login'
  // (async () => { await isFirstOpen }) ? 'onboard' :
  //   (async () => { !(await isLoggedIn) }) ? 'login' : undefined

  // const contextValue = AuthContextDefaultValues()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          translucent={true}
          backgroundColor='transparent'
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}