import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingIntroduce from './Screens/Onboarding/OnboardingIntroduce';
import OnboardingIntroduceNext1 from './Screens/Onboarding/OnboardingInroduceNext1';
import OnboardingIntroduceNext2 from './Screens/Onboarding/OnboardingInroduceNext2';
import SignInScreen from './Screens/Author/SignInScreen';
import SignUpScreen from './Screens/Author/SignUpScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import CallScreen from './Screens/Chat/CallScreen';
import CartScreen from './Screens/Cart/CartScreen';
import ExploreRestaurant from './Screens/Home/ExploreRestaurantScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="OnboardingIntroduce" component={OnboardingIntroduce} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingIntroduceNext1" component={OnboardingIntroduceNext1} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingIntroduceNext2" component={OnboardingIntroduceNext2} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Home.png')} />
                ),
                tabBarLabel: 'Home',
                headerShown: false,
              }} />
              <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Profile.png')} />
                ),
                tabBarLabel: 'Profile',
                headerShown: false,
              }} />
              <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Buy.png')} />
                ),
                tabBarLabel: 'Cart',
                headerShown: false,
              }} />
              <Tab.Screen name="Call" component={CallScreen} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Chat.png')} />
                ),
                tabBarLabel: 'Call',
                headerShown: false,
              }} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="ExploreRestaurant" component={ExploreRestaurant} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
