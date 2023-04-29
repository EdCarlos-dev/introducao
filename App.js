import {
    Text,
    Button, 
    View 
  } from 'react-native'
  //hook (16.8, useState)
  export default function App() {
    return (
  <View style={{width: '100%', alignItems: 'center', padding: 20}}>
    <Text style={{width: '80%', borderColor: '#CCC', borderWidth: 1, textAlign: 'center', backgroundColor: '#DDD', padding: 8, borderRadius: 8}}>
      Ola mundo - React 
    </Text>
    <View style={{width: '80%'}}>
      <Button
        title = 'Clicar'
      />
    </View>
  </View>
  
    )  
  }