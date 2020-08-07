import React from 'react';
import {View } from 'react-native';
import PageHeader from '../../components/pageHeader';
import styles from './styles';

import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function Favorites()
{
    return (
        <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos"/>

        <ScrollView style={styles.favoriteList} contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24
        }}>
            <TeacherItem/>   
            <TeacherItem/> 
            <TeacherItem/> 
            <TeacherItem/> 
        </ScrollView>
        
    </View>
         );
}

export default Favorites;