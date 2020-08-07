import React, {useState} from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher{
    id:number;
    avatar: string;
    bio: string;
    cost:number;
    name:string;
    subject:string;
    whatsapp:string;
};

interface TeacherItemProps {
    teacher: Teacher;
    favorited:boolean;
} 

const  TeacherItem:React.FC<TeacherItemProps> = ({teacher, favorited}) =>
{
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsApp()
    {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    } 

    async function handleToggleFavorite()
    {
        if(isFavorited)
        {
            //remove from favorites
        }
        else
        {
            //add to favorites
            const favorites = await AsyncStorage.getItem('favorites');
            
            let favoriteArray = [];

            if(favorites)
            {
                favoriteArray = JSON.parse(favorites);
            }

            favoriteArray.push(teacher);

            setIsFavorited(true);
            await AsyncStorage.setItem('favorite', JSON.stringify(favoriteArray));
        }
    }

    return(
    
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image style={styles.avatar}
            source={{uri: teacher.avatar}}/>
        
            <View style={styles.profileInfo}>
                <Text style={styles.name}>
                    {teacher.name}
                </Text>
                <Text style={styles.subject}>
                    {teacher.subject}
                </Text>
            </View>
        </View>
        <Text style={styles.bio}>
            {teacher.bio}
        </Text>
        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/Hora {'   '}
                <Text style={styles.priceValue}>{teacher.cost}</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, isFavorited?styles.favorited:{} ]}>
                    {isFavorited ? <Image source={unfavoriteIcon}/>: <Image source={heartOutlineIcon}/>}
                   
                    
                </RectButton>

                <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
                    onPress={handleToggleFavorite}
                    <Image source={whatsappIcon}/>
                    <Text style={styles.contactButtonText}>
                        entrar em contato
                    </Text>
                </RectButton>
            </View>
        </View>
    </View>
        
    );
};

export default TeacherItem;