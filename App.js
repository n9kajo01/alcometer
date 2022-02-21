import { Text, View, Button, TextInput, ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from "react"
import styles from './styles.js';
import RadioForm from 'react-native-simple-radio-button';


export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [bac, setBac] = useState(0);

  function CalculateBAC() {
    if (weight === "" || weight === 0) {
      alert("Input weight!")
    } else {
      let liters = bottles * 0.33
      let grams = liters * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - burning * time
      let result
      if (gender === "male") {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
      if (result < 0) {
        result = 0
      }
      setBac(result)
    }
  }

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" }
  ]


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Alcometer</Text>
        <Text style={styles.text}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          keyboardType='decimal-pad' />
        <Text style={styles.text}>Bottles</Text>
        <Picker
        selectedValue={bottles}
          onValueChange={(itemValue) => setBottles(itemValue)
          }>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
        <Text style={styles.text}>Time</Text>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)
          }>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
        <Text style={styles.text}>Gender</Text>
        <RadioForm
          buttonSize={10}
          radio_props={genders}
          onPress={value => setGender(value)}
        />
        <Text style={styles.result}>{bac.toFixed(2)}</Text>
        <Button
          title="Calculate"
          onPress={CalculateBAC} />
        <StatusBar style="auto" />
      </ScrollView>

    </View>
  );
}

