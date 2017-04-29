
//React Imports
import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

//Component imports
import { HomeScreen } from './Home'
import { FindPartner } from './FindPartner'
import { AllPartners } from './AllPartners'
import { Geolocation } from './Geolocation'
import { Message } from './Message'
import { User } from './User'

export const ClimbingPartnerFinder = StackNavigator({
  Home: { screen: HomeScreen },
  Find: { screen: FindPartner },
  Geolocator: { screen: Geolocation },
  AllPartners: { screen: AllPartners },
  Message: { screen: Message },
  User: { screen: User }
});

AppRegistry.registerComponent('ClimbingPartnerFinder', () => ClimbingPartnerFinder);



