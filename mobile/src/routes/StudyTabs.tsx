import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/favorites';
import {Ionicons} from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs()
{
    return(
        <Navigator
            tabBarOptions={{
                style:{
                    elevation:0,
                    shadowOpacity:0,
                    height: 64,
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center'
                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20
                },
                labelStyle:{
                    fontFamily:'Archivo_700Bold',
                    fontSize:13,
                    marginLeft:16
                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor:'#EBEBF5',
                inactiveTintColor:'#c1bbcc',
                activeTintColor:'#32264d'
            }}
        >
            <Screen name="TacherList" 
            options={{
                tabBarLabel:'proffys',
                tabBarIcon: ({color, size, focused}) => {
                    return(
                        <Ionicons name="ios-easel" size={size} color={focused ?'#8257e5':color}/>
                    );
                }
            }} component={TeacherList} />

            <Screen 
            name="Favorites" 
            options={{
                tabBarLabel:'favoritos',
                tabBarIcon: ({color, size, focused}) => {
                    return(
                        <Ionicons name="ios-heart" size={size} color={focused ?'#8257e5':color}/>
                    );
                }
            }}
            component={Favorites} />
        </Navigator>
    );
}

export default StudyTabs;