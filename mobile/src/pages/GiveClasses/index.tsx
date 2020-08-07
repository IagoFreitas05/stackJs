import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';


function GiveClasses(){

    const {goBack} = useNavigation();

    function handleNavigateBack()
    {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' style={styles.content} source={GiveClassesBgImage}>
                <Text style={styles.title}>
                    Quer ser um prof?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            
            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;