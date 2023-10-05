import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingIntroduce from './Screens/Onboarding/OnboardingIntroduce';
import OnboardingIntroduceNext1 from './Screens/Onboarding/OnboardingInroduceNext1';
import OnboardingIntroduceNext2 from './Screens/Onboarding/OnboardingInroduceNext2';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="OnboardingIntroduce" component={OnboardingIntroduce}   options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingIntroduceNext1" component={OnboardingIntroduceNext1}   options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingIntroduceNext2" component={OnboardingIntroduceNext2}   options={{ headerShown: false }}/>
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
