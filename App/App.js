const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingV1 from "./screens/OnboardingV1";
import OnboardingV2 from "./screens/OnboardingV2";
import OnboardingV3 from "./screens/OnboardingV3";
import OnboardingV4 from "./screens/OnboardingV4";
import OnboardingV5 from "./screens/OnboardingV5";
import OnboardingV6 from "./screens/OnboardingV6";
import SplashScreen from "./screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import SignUpForm from "./screens/SignUpForm";
import ResetPassword from "./screens/ResetPassword";
import Verify from "./screens/Verify";
import NewPassword from "./screens/NewPassword";
import Home from "./screens/Home";
import Search from "./screens/Search";
import SearchResult from "./screens/SearchResult";
import MovieDetails from "./screens/MovieDetails";
import SearchByActor from "./screens/SearchByActor";
import SearchBlank from "./screens/SearchBlank";
import Download from "./screens/Download";
import DownloadBlank from "./screens/DownloadBlank";
import Wishlist from "./screens/Wishlist";
import WishlistBlank from "./screens/WishlistBlank";
import Genre from "./screens/Genre";
import UpcomingMovie from "./screens/UpcomingMovie";
import Trailer from "./screens/Trailer";
import MostPopular from "./screens/MostPopular";
import SerialDetail from "./screens/SerialDetail";
import PremiumAccount from "./screens/PremiumAccount";
import PaymentMethod from "./screens/PaymentMethod";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Notifications from "./screens/Notifications";
import Language from "./screens/Language";

const App = () => {
  const [hideSplashScreen,] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="OnboardingV1"
              component={OnboardingV1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingV2"
              component={OnboardingV2}
              options={{ headerShown: false }}
            />
          <Stack.Screen
            name="OnboardingV3"
            component={OnboardingV3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingV4"
            component={OnboardingV4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingV5"
            component={OnboardingV5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingV6"
            component={OnboardingV6}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpForm"
            component={SignUpForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Verify"
            component={Verify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchByActor"
            component={SearchByActor}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchBlank"
            component={SearchBlank}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Download"
            component={Download}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DownloadBlank"
            component={DownloadBlank}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Wishlist"
            component={Wishlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WishlistBlank"
            component={WishlistBlank}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Genre"
            component={Genre}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UpcomingMovie"
            component={UpcomingMovie}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Trailer"
            component={Trailer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MostPopular"
            component={MostPopular}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SerialDetail"
            component={SerialDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PremiumAccount"
            component={PremiumAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentMethod"
            component={PaymentMethod}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{headerShown: false}}
          />
           
          </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
};
export default App;
