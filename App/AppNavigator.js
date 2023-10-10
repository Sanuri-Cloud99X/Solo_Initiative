import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CenteredImage from './screens/Onboarding/Onboarding1';
import Onboard2 from './screens/Onboarding/Onboarding2';
import Onboard3 from './screens/Onboarding/Onboarding3';
import Onboard4 from './screens/Onboarding/Onboarding4';
import Onboard5 from './screens/Onboarding/Onboarding5';
import Onboard6 from './screens/Onboarding/Onboarding6';
import Onboard7 from './screens/Onboarding/Onboarding7';
import Onboard8 from './screens/Onboarding/Onboarding8';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CenteredImage"
        component={CenteredImage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Onboard2"
        component={Onboard2}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Onboard3"
        component={Onboard3}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Onboard4"
        component={Onboard4}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Onboard5"
        component={Onboard5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard6"
        component={Onboard6}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Onboard7"
        component={Onboard7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard8"
        component={Onboard8}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
