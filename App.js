import * as React from 'react';
import {  Text,  View,  StyleSheet,  TextInput,  TouchableOpacity,  Image, Button} from 'react-native';
import {Audio}from 'expo-av';
import { Header } from 'react-native-elements';
import PhonicSoundButton from './components/PhonicSoundButton';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true}
     )
  }

  render() {
    return (
      <TouchableOpacity style={{
        backgroundColor:"black",
        marginLeft:140,
        marginRight:120,
        color:"green"
      }}  
      onPress = {this.playSound}>
    <Text style = {{
      color:"lightgreen"
    }}>press me</Text>
    </TouchableOpacity> 
    ,
    <TouchableOpacity style={{
        backgroundColor:"black",
        marginLeft:30,
        marginRight:60,
        color:"green"
      }}  
      onPress = {this.playSound}>
    <Text style = {{
      color:"lightgreen"
    }}>press me..press me..press me..press me</Text>
    </TouchableOpacity> 
    
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
       <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    ),
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'classTask',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
      />
        
        </View>
      
    
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
    imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});
