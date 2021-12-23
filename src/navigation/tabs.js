import React from 'react';
import {StyleSheet, Platform, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Diary from '../scenes/diary';
import Status from '../scenes/status';
import Exercise from '../scenes/exercise';
import Calendar from '../scenes/calendar/calendar';
import SurveyMenu from '../../assets/svg/SurveyMenu';
import DiaryMenu from '../../assets/svg/DiaryMenu';
import ExerciseMenu from '../../assets/svg/ExerciseMenu';
import GraphMenu from '../../assets/svg/GraphMenu';
import localStorage from '../utils/localStorage';
import logEvents from '../services/logEvents';
import {colors} from '../utils/colors';
import Header from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
const StatusStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function StatusStackScreen() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Mon état',
          tabBarIcon: ({color}) => <SurveyMenu height={24} style={{color}} />,
        }}
      />
    </StatusStack.Navigator>
  );
}

const Tabs = ({navigation, route}) => {
  const startSurvey = async () => {
    const symptoms = await localStorage.getSymptoms();
    logEvents.logFeelingStart();
    if (!symptoms) {
      navigation.navigate('symptoms', {
        showExplanation: true,
        redirect: 'select-day',
      });
    } else {
      navigation.navigate('select-day');
    }
  };

  // return (
  //   <Tab.Navigator>
  //     <Tab.Screen name="Home" component={StatusStackScreen} />
  //     {/* <Tab.Screen name="Settings" component={SettingsStackScreen} /> */}
  //   </Tab.Navigator>
  // );

  return (
    <>
      <Tab.Navigator
        initialRouteName="Status"
        swipeEnabled={true}
        tabBarPosition="bottom"
        tabBarActiveColor={colors.LIGHT_BLUE}
        tabBarInactiveTintColor={colors.BLUE}
        tabBarShowLabel={false}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 10,
            marginHorizontal: 0,
            padding: 0,
          },
          tabBarItemStyle: {width: 100},
          tabBarIndicatorStyle: {height: 0},
          tabBarStyle: styles.tabBar,
        }}

        // screenOptions={{
        //   showIcon: true,
        //   iconStyle: {
        //     // borderColor: 'red',
        //     // borderWidth: 1,
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   },
        //   labelStyle: {
        //     textTransform: 'capitalize',
        //     fontSize: 10,
        //     marginHorizontal: 0,
        //     padding: 0,
        //   },
        // }}
      >
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            tabBarLabel: 'Mon état',
            tabBarIcon: ({color}) => <SurveyMenu height={24} style={{color}} />,
          }}
        />
        <Tab.Screen
          name="Diary"
          component={Diary}
          options={{
            tabBarLabel: 'Mon journal',
            tabBarIcon: ({color}) => <DiaryMenu height={24} style={{color}} />,
          }}
        />
        <Tab.Screen
          name="Exercise"
          component={Exercise}
          options={{
            tabBarLabel: 'Exercice',
            tabBarIcon: ({color}) => (
              <ExerciseMenu height={24} style={{color}} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: 'Mon suivi',
            tabBarIcon: ({color}) => <GraphMenu height={24} style={{color}} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: colors.LIGHT_BLUE_TRANS,
    borderTopWidth: 0.5,
    maxHeight: 80,
  },
  surveyButton: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 40 : 50,
    zIndex: 1,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingVertical: Platform.OS === 'android' ? 5 : 17,
    fontWeight: '700',
  },
});

export default Tabs;
