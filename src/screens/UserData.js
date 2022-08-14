import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'

const UserData = () => {
    const [loaded, setLoaded] = useState(true)
    const [myData, setMyData] = useState([]);
    // "https://thapatechnical.github.io/userapi/users.json"
    
    const getUserdata = async () => {
      try{
      const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const data = await response.json();
      // console.log(data);
      setMyData(data);
      setLoaded(false)
      }
      catch(err){
          console.log(err);
      }
    }
    console.log(myData);
     useEffect(() => getUserdata() , []);

    const showUserData = ({ item }) => {
      return( 
         <View style={styles.mainContainer}>
           <View style={styles.imgContainer}>
               <Image style={styles.imgStyle}
                 source={{uri: item.image}}
               >
               </Image>
           </View>
              <View>
                  <View style={styles.biodataContainer}>
                         <Text style={styles.bioData}>{item.name}</Text>
                         <Text style={styles.idNumber}>
                           {item.id < 10 ? `#0${item.id}` : `${item.id}`}
                         </Text>
                  </View>

                 <View style={styles.cntenContainer}>
                      <Text style={styles.MyName}>
                        Name : {item.name}
                      </Text>
                      <Text style={styles.MyName}>
                        mail : {item.email}
                      </Text>
                      <Text style={styles.MyName}>
                        ph-no : {item.mobile}
                      </Text>
                 </View>

              </View>
         </View>
    )}
    
  return (
    <View>
      <Text>List of Students</Text>
      <FlatList 
        data={myData}
        renderItem={showUserData}
       ></FlatList>
    </View>
  )
}


 const styles = StyleSheet.create({
  mainContainer:{
     padding: 20
  },
  imgContainer:{
    padding: 20,
  },

  imgStyle:{
    width:"100%",
    height: "50%",
    resizeMode: "cover",
    height: undefined,
    aspectRatio : 1,
    borderRadius: 25,
  },
  biodataContainer:{
    alignItems: "center"
  },
  bioData:{
    fontSize: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    textTransform : "capitalize"
  },
  cntenContainer:{
    padding: 20,
    alignItems : "center"
  }
 })
export default UserData