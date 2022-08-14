import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'


const Menu = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
         <TouchableOpacity
          style={styles.btns}
          onPress={
            () => nav.navigate("Course")
          }
         >
          <Text style={styles.tab}>Course</Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.btns}
          onPress={
            () => nav.navigate("About")
          }
         >
         <Text style={styles.tab}>About</Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.btns}
          onPress={
            () => nav.navigate("Contact")
          }
         >
         <Text style={styles.tab}>Contact</Text>
         </TouchableOpacity>


         <TouchableOpacity
          style={styles.btns}
          onPress={
            () => nav.navigate("User")
          }
         >
         <Text style={styles.tab}>User</Text>
         </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    // backgroundColor:"red",
    width:"100%",
    paddingVertical: 10,
    // position:"absolute",
    // height: "100vh"
    borderTopWidth: 2,
    borderTopColor:"grey",
  },
  tab:{
    fontSize: 16,
    fontWeight:"500"
  }
})
export default Menu;