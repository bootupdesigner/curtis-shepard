import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter, useNavigation } from 'expo-router';

import Fontisto from '@expo/vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons'; 

const Skill = ({ id, icon, title, description, shortDescription, color ,dependent}) => {
    const router = useRouter();
    const navigation = useNavigation();

    const navigateToExperience = (skillId) => {
        navigation.navigate('experience', { skillId });
    };

    return (
        <TouchableOpacity onPress={() => navigateToExperience(id)} style={styles.body}>
            {dependent === 'Fontisto' ?
                <Fontisto name={icon} size={48} color={color} />
                 : <Ionicons name={icon} size={48} color={color} />
                 }

            <Text onPress={() => navigateToExperience(id)} style={{ textAlign: 'center', fontSize: 18.72, fontWeight: 'bold' }}>{title}</Text>

            <Text onPress={() => navigateToExperience(id)} style={{ textAlign: 'center', elevation: 1, borderRadius: 25, padding: 10, backgroundColor: 'white', borderColor: 'black' }}>Learn More</Text>
        </TouchableOpacity>
    )
}

export default Skill

const styles = StyleSheet.create({
    body: {
        height: 220,
        elevation: 5,
        borderRadius: 20,
        margin: 10,
        width: 220,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignItems:'center',
    }
})