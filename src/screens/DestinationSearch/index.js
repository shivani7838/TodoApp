import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationnSearch = () => {
  const [formText, setFormText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [originalPlace, setOriginalPlace] = useState('');
  const [destinatioPlace, setDestiationPlace] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={formText}
          onChangeText={setFormText}
          style={styles.textInput}
          placeholder="Form"
        />
        <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where to"
        />
        <GooglePlacesAutocomplete
      placeholder='"Where to'
      onPress={(data, details = null) => {
        setDestiationPlace({data,details});
        console.log(data, details);
      }}
     style ={{textInput:styles.textInput}}
      fetchDetails
      query={{
        key: 'AIzaSyD4kQ4o_LHr51DNt9xx65FWGSfzwESCnE4',
        language: 'en',
      }}
    />
      </View>  
      
    </SafeAreaView>
  );
};

export default DestinationnSearch;
