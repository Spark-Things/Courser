import { Text, View ,Image,StyleSheet } from 'react-native'
import React from 'react'
import Menu from './Menu'

export const Home = (props) => {
    return (
      <View>
      <View style={styles.container}>
        <Image
           style={styles.headImage} 
           source={require('../../assets/images.jpg')}/>
           <Text style={styles.wcmMsg} >
               Welcome
                to  
            {props.cn}
           </Text>
      </View>
           <View style={styles.navPanel}>
              <Menu/>
           </View>
           </View>   
    )
  }

const styles = StyleSheet.create({
  headImage: {
    width: "100%",
    height: undefined,
    resizeMode :"cover",
    aspectRatio : 1,
    borderRadius : 25,
  },
  container:{
    // backgroundColor:"red",
    width:"100%",
    padding : 40,
    height: "94%",
    paddingTop : 70,
  },
  wcmMsg:{
    fontSize: 26,
    color: '#05668D',
    textAlign :"center",
    marginVertical : 20,
    letterSpacing : 4,
    textTransform :"capitalize",
    fontWeight:"bold",
  },
})

export default Home