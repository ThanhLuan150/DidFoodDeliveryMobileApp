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
import ExploreRestaurant from './Screens/Home/ExploreRestaurantScreen';
import ExploreMenu from './Screens/Home/ExploreMenuScreen';
import FilterScreen from './Screens/Home/FilterScreen';
import NotificationScreen from './Screens/Notification/NotificationScreen';
import SignUpProcessScreen from './Screens/Author/SignUpProcessScreen';
import UploadPhotoScreen from './Screens/Author/UploadPhotoScreen';
import UploadPhotoPreview from './Screens/Author/UploadReviewScreen';
import SetLocationScreen from './Screens/Author/SetLocationScreen';
import SignUpSucessfullyNotificationScreen from './Screens/Author/SignUpSucessfullyNotificationScreen';
import ForgetPasswordScreen from './Screens/Author/ViaMethodScreen';
import VerifycationCodeScreen from './Screens/Author/VerifycationCodeScreen';
import PasswordEditSuccesfullyScreen from './Screens/Author/PasswordEditSuccessfullyScreen';
import PasswordSucessfullyScreen from './Screens/Author/LoginSucessfully';
import VoucherPromotion from './Screens/Vouchers/VoucherPromotionSCreen';
import OrderDetailScreen from './Screens/Orders/OrderDetail';
import ConfirmOrderScreen from './Screens/Payment/ConfilmOrderScreen';
import EditPaymentScreen from './Screens/Payment/EditPaymentScreen';
import EditLocationScreen from './Screens/Payment/EditLocationScreen';
import YourOrderScreen from './Screens/Payment/YourOrderScreen';
import SetLocation from './Screens/Payment/SetLocation';
import TrackOrderScreen from './Screens/Payment/TrackOrders';
import DetailProduct from './Screens/Details/DetailProduct';
import DetailMenuScreen from './Screens/Details/DetailMenuScreen';
import ChatDetail from './Screens/Chat/ChatDetailScreen';
import MessageScreen from './Screens/Chat/MessageScreen';
import Total from './Screens/Orders/Total';
import Card from './Screens/Orders/Cart';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingIntroduce">
        <Stack.Screen name="OnboardingIntroduce" component={OnboardingIntroduce} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingIntroduceNext1" component={OnboardingIntroduceNext1} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingIntroduceNext2" component={OnboardingIntroduceNext2} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpProcessScreen" component={SignUpProcessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPhotoPreview" component={UploadPhotoPreview} options={{ headerShown: false }} />
        <Stack.Screen name="SetLocationScreen" component={SetLocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpSucessfullyScreen" component={SignUpSucessfullyNotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifycationCodeScreen" component={VerifycationCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordEditSuccesfullyScreen" component={PasswordEditSuccesfullyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordSucessfullyScreen" component={PasswordSucessfullyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VoucherPromotion" component={VoucherPromotion} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmOrderScreen" component={ConfirmOrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditPaymentScreen" component={EditPaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditLocationScreen" component={EditLocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="YourOrderScreen" component={YourOrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SetLocation" component={SetLocation} options={{ headerShown: false }} />
        <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }} />
        <Stack.Screen name="DetailMenuScreen" component={DetailMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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
              <Tab.Screen name="Cart" component={Card} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Buy.png')} />
                ),
                tabBarLabel: 'Cart',
                headerShown: false,
              }} />
              <Tab.Screen name="Message" component={MessageScreen} options={{
                tabBarIcon: () => (
                  <Image source={require('./assets/Home/Chat.png')} />
                ),
                tabBarLabel: 'Message',
                headerShown: false,
              }} /> 
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="ExploreRestaurant" component={ExploreRestaurant} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreMenu" component={ExploreMenu} options={{ headerShown: false }} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} options={{ headerShown: false }} />  
        <Stack.Screen name="CallScreen" component={CallScreen} options={{ headerShown: false }} />  
        </Stack.Navigator>
    </NavigationContainer>
  );
}
