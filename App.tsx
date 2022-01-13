import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify from '@aws-amplify/core';
import * as Keychain from 'react-native-keychain';
import awsconfig from './src/aws-exports';
// import { useColorScheme from 'react-native-appearance';
// import Themed from './components/Themed'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// const DarkTheme = {
//   dark: true,
//   colors: {
//     primary: '#50E3C2',
//     background: '#1D1E1F',
//     card: '#1D1E1F',
//     text: '#ffffff',
//     border: '#ff06f4'
//   }
// }

// const LightTheme = {
//   dark: false,
//   colors: {
//     primary: '#ff06f4',
//     background: '#ffffff',
//     card: '#1D1E1F',
//     text: '#ffffff',
//     border: '#ff06f4'
//   }
// }

// const MEMORY_KEY_PREFIX = '@MyStorage:'
// let dataMemory: any = {}
// class MyStorage {
//   static syncPromise = null

//   static setItem(key: string, value: string): boolean {
//     Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
//     dataMemory[key] = value
//     return dataMemory[key]
//   }

//   static getItem(key: string): boolean {
//     return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
//   }

//   static removeItem(key: string): boolean {
//     Keychain.resetGenericPassword()
//     return delete dataMemory[key]
//   }

//   static clear(): object {
//     dataMemory = {}
//     return dataMemory
//   }
// }

// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: false
//   },
//   storage: MyStorage
// })

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
