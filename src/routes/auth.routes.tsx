import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {SignIn } from '../screens/SignIn';
import { AppointmentsDetails} from '../screens/AppointmentsDetails';
import { AppointmentsCreate} from '../screens/AppointmentsCreate';
import { theme } from '../global/styles/theme';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
  return (
    <Navigator
      headerMode="none"//excluir cabeçalho
      screenOptions={{
        cardStyle:{
          backgroundColor: theme.colors.secondary100,
        }
      }}
    >
      <Screen 
        name='signIn'
        component={SignIn}
      />
       <Screen 
        name='home'
        component={Home}
      />
       <Screen 
        name='appointmentDetails'
        component={AppointmentsDetails}
      />
        <Screen 
        name='appointmentCreate'
        component={AppointmentsCreate}
      />
    </Navigator>
  )
}