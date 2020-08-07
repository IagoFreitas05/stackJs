import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';
import PageHeader from '../../components/pageHeader';
import TeacherItem,{Teacher} from '../../components/TeacherItem';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/Api';

function TeacherList()
{
    
    const [teachers, setTeachers] = useState([]);

    const[subject, setSubject] = useState('');
    const[week_day, setWeekDay] =  useState('');
    const[time, setTime] = useState('');
    const[favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(response =>{
            if(response)
            {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) =>{
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    },[])
   async  function handleFilterSubmit()
    {
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data);
    }

    return( 
    <View style={styles.container}>
        <PageHeader title="Proffys disponíveis">

            <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput
                style={styles.input} 
                placeholder="Qual a matéria"
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholderTextColor="#c1bccc"/>
            

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Qual o dia?</Text>
                        <TextInput
                        style={styles.input} 
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                        placeholder="Dia da semana"
                        placeholderTextColor="#c1bccc"/>
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                        style={styles.input} 
                        placeholder="Qual horário"
                        value={time}
                        onChangeText={text => setTime(text)}
                        placeholderTextColor="#c1bccc"/>
                    </View>
                </View>
                 <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                    <Text style={styles.submitButtonText}>
                        Filtrar
                    </Text>
                </RectButton>   
            
            </View>
        </PageHeader>

        <ScrollView style={styles.teacherList} contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24
        }}>
            {teachers.map((teacher:Teacher)=> {
                return ( 
                <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}
                /> );
            })}
            
            
        </ScrollView>
        
    </View>
    
    );
}

export default TeacherList;