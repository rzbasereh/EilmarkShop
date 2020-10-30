import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Explore from "../containers/Explore";
import Cart from "../containers/Cart";
import Wish from "../containers/Wish";
import Svg, {Path} from "react-native-svg";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'فروشگاه',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Svg width="27" height="27" viewBox="0 0 16 16" fill={tintColor}
                             xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd"
                                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <Path fill-rule="evenodd"
                                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </Svg>
                    </View>
                ),
            },
        },

        Explore: {
            screen: Explore,
            navigationOptions: {
                tabBarLabel: 'جستجو',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Svg width="27" height="27" viewBox="0 0 16 16" fill={tintColor}>
                            <Path fill-rule="evenodd"
                                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <Path fill-rule="evenodd"
                                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </Svg>
                    </View>
                ),
            },
        },

        Cart: {
            screen: Cart,
            navigationOptions: {
                tabBarLabel: 'سبد خرید',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Svg width="27" height="27" viewBox="0 0 16 16" fill={tintColor}>
                            <Path fill-rule="evenodd"
                                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </Svg>
                    </View>
                ),
            },
        },

        Wish: {
            screen: Wish,
            navigationOptions: {
                tabBarLabel: 'علاقه مندی ها',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Svg width="27" height="27" viewBox="0 0 16 16" fill={tintColor}>
                            <Path fill-rule="evenodd"
                                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </Svg>
                    </View>
                ),
            },
        },

        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'حساب کاربری',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Svg width="27" height="27" viewBox="0 0 16 16" fill={tintColor}>
                            <Path fill-rule="evenodd"
                                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </Svg>
                    </View>
                ),
            },
        },
    },


    {
        initialRouteName: 'Home',
        activeColor: '#62b902',
        inactiveColor: '#a5aec0',
        barStyle: {
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10,
            shadowColor: "#00f",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
        },
    }
);

export default createAppContainer(TabNavigator);