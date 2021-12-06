import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only necessary</Text>
      <Text style={styles.text}>
        Millions of developers and companies build, ship, and maintain their
        software on GitHub—the largest and most advanced development platform in
        the world.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
