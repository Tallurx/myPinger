/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import CallHeader from '../components/CallHeader/CallHeader';
import ChatRoomHeader from '../components/ChatHeader/ChatHeader';
import FeedsHeader from '../components/FeedsHeader/FeedsHeader';
import GroupHeader from '../components/GroupHeader/GroupHeader'
import HomeHeader from '../components/HomeHeader/HomeHeader';
import defcolor from '../constants/defcolor';

import useColorScheme from '../hooks/useColorScheme';
import CallScreen from '../screens/CallScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScreen';
import DoneScreen from '../screens/DoneScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import GroupsScreen from '../screens/GroupsScreen';
import ModalScreen from '../screens/ModalScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ConfirmScreen from '../screens/Confirm';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false,}}/> */}
      <Stack.Screen name="Confirm" component={ConfirmScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Calls" component={CallScreen} options={{ headerShown: false,}}/>
      <Stack.Screen name="Contacts" component={ContactScreen}/>
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}        
        options={({ route }) => ({
          title: route.title,
          headerTitle: ChatRoomHeader, 
          headerBackTitleVisible: false,
        })} 
      /> 
      <Stack.Screen name="Groups" component={TopTabNavigator} options={{ headerShown: false,}} />
      <Stack.Screen name="Call" component={myTabNavigator} options={{ headerShown: false,}} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
    initialRouteName="Chats"
    >
      <BottomTab.Screen
        name="Camera"
        component={ModalScreen}
        options={{
          tabBarIcon: ({ color }) => 
          <Feather name="camera" size={30} color= {defcolor} 
          style={{ marginHorizontal: 10}} />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={TabOneScreen}
        options={{
          headerTitle: HomeHeader,
          headerStyle: {
            height: 150, // Specify the height of your custom header
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          tabBarIcon: ({ color }) => 
          <Ionicons name="chatbubble-outline" size={30} color={defcolor} />,
        }}
      />

      <BottomTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          headerTitle: FeedsHeader,
          headerStyle: {
            height: 100, // Specify the height of your custom header
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          tabBarIcon: ({ color }) =>
          <FontAwesome name="dot-circle-o" size={30} color={defcolor} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
const myTab = createBottomTabNavigator<RootTabParamList>();

function myTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <myTab.Navigator
    initialRouteName="Chats"
    >
      <myTab.Screen
        name="Camera"
        component={ModalScreen}
        options={{
          tabBarIcon: ({ color }) => 
          <Feather name="camera" size={30} color= {defcolor} 
          style={{ marginHorizontal: 10}} />,
        }}
      />
      <myTab.Screen
        name="Chats"
        component={CallScreen}
        options={{
          headerTitle: CallHeader,
          headerStyle: {
            height: 150, // Specify the height of your custom header
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          tabBarIcon: ({ color }) => 
          <Ionicons name="chatbubble-outline" size={30} color={defcolor} />,
        }}
      />

      <myTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) =>
          <FontAwesome name="dot-circle-o" size={30} color={defcolor} />,
        }}
      />

    </myTab.Navigator>
  );
}

const TopTab = createBottomTabNavigator<RootTabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
    initialRouteName="Chats"
    >
      <TopTab.Screen
        name="Camera"
        component={ModalScreen}
        options={{
          tabBarIcon: ({ color }) => 
          <Feather name="camera" size={30} color= {defcolor} 
          style={{ marginHorizontal: 10}} />,
        }}
      />
      <TopTab.Screen
        name="Chats"
        component={GroupsScreen}
        options={{
          headerTitle: GroupHeader,
          headerStyle: {
            height: 150, // Specify the height of your custom header
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          tabBarIcon: ({ color }) => 
          <Ionicons name="chatbubble-outline" size={30} color={defcolor} />,
        }}
      />

      <TopTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) =>
          <FontAwesome name="dot-circle-o" size={30} color={defcolor} />,
        }}
      />

    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
