import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import GenerateQRScreen from '../Screens/generateQR';
import ContactScreen from '../Screens/contactUS';
import ScanQRScreen from '../Screens/scanQR';
// import SearchScreen from '../Screens/search';
import ProfileScreen from '../Screens/profile';
// import DrawerContainer from './DrawerContainer';
// import TabBarComponent from './TabBarComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons'
import {color, font, apiURLs} from '../components/Constant';

const generateQRStack = createStackNavigator({
  generateQRScreen: { screen: GenerateQRScreen },
}, {
   headerMode: 'none',
   initialRouteName: 'generateQRScreen',
})

const contactStack = createStackNavigator({
  contactScreen: { screen: ContactScreen },
}, {
   headerMode: 'none',
   initialRouteName: 'contactScreen',
})

const scanQRStack = createStackNavigator({
  scanQRScreen: { screen: ScanQRScreen },
}, {
   headerMode: 'none',
   initialRouteName: 'scanQRScreen',
})
const ProfileStack = createStackNavigator({
  profileScreen: { screen: ProfileScreen },
}, {
   headerMode: 'none',
   initialRouteName: 'profileScreen',
})

export default createBottomTabNavigator(
  {
    Scan: { screen: scanQRStack },
    Generate: { screen: generateQRStack },
    Contact: { screen: contactStack },
    Settings: { screen: ProfileStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Scan') {
          iconName = `qrcode-scan`;
          return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        } else if (routeName === 'Contact') {
          iconName = `envelope-letter`;
          return <SimpleLineIcons name={iconName} size={25} color={tintColor} />
        } else if (routeName === 'Generate') {
            iconName = `pencil`;
            return <SimpleLineIcons name={iconName} size={25} color={tintColor} />
        } else if (routeName === 'Settings') {
            iconName = `settings`;
            return <SimpleLineIcons name={iconName} size={25} color={tintColor} />
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        //return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      // tabBarLabel: ({ focused, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   if (routeName === 'Home') {
      //     return <Text>Scan</Text>
      //   } else if (routeName === 'Notification') {
      //     return <Text>Contact</Text>
      //   } else if (routeName === 'Group') {
      //       return <Text>Generate</Text>
      //   }
      // },

    }),
    // tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // tabBarComponent: props => <TabBarComponent {...props} />,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: color.primary,
		  inactiveTintColor: "#92928A",
      style: {
            backgroundColor: color.white,
            height:60
            // borderTopWidth: 0,
		  },
    },
    initialRouteName: 'Settings',
  }
);

// export default createDrawerNavigator({
//   bottomTabs: { screen: bottomTabs },
// }, {
//   // gesturesEnabled: false,
//   // disableGestures:'disable',
//   contentComponent: DrawerContainer,
// });