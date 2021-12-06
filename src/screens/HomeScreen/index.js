import React from 'react'
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  
import Entypo from 'react-native-vector-icons/Entypo';  
import HomeMap from '../../components/HomeMap/index.js';
import CovidMessage from '../../components/CovidMessage/index.js';
import styles from './styles.js';

const HomeScreen = () => {
    return (
        <View>
            <HomeMap/>
            <CovidMessage/>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                    <Text >Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View>
            {/* Previous Destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
                </View>
                <Text style={styles.destiationText}>Spin Nightclub</Text>
            </View>
            {/* Home Destination */}
            
            <View style={styles.row}>
                <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]}>
                <Entypo name={'home'} size={20} color={'#ffffff'} />
                </View>
                <Text style={[styles.destiationText]}>Spin Nightclub</Text>
            </View>
        </View>
    )
}

export default HomeScreen;
