import { View, Text, FlatList, StyleSheet,Image, Button } from 'react-native'
import React from 'react'
import Courses from '../../assets/api/Courses';


const Course = () => {
  
       const courseCard = ({item}) =>{
         return(
           <View style={styles.container}>
                 <View style={styles.courseContainer}>
                  
                  <View>
                     <Image style={styles.Cimage}
                       source={item.image}
                        > 
                     </Image>
                  </View>
                   <Text style={styles.Mainheader}>
                            {item.title}
                   </Text>
                   <Text style={styles.Discription}>
                       {item.description}
                   </Text>
                    <View style={styles.courseDisplay}>
                        <Text style={styles.courseName}>{item.course1}</Text>
                        <Text style={styles.courseName}>{item.course2}</Text>
                        <Text style={styles.courseName}>{item.course3}</Text>
                   </View>
                  <Text style={styles.Price}>₹ {item.price}</Text> 

                  <Button 
                    style={{
                      color:"red",
                    }}
                    title="Enroll Now"
                    ></Button>
                  </View>  
           </View>
         )
       }
  return (
    <FlatList
    keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}   
    />
  )
}


const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  courseContainer:{
    width: "100%",
    padding : 10,
    borderColor : "grey",
    borderStyle :"solid",
    borderWidth: 1,
    borderRadius: 10,
  },
  Cimage:{
    height: 200,
    width: "100%",
    borderRadius: 4
  },
  Mainheader:{
    fontSize: 24,
    textAlign: "center",
    marginVertical : 20,
    letterSpacing: 5,
    textTransform : "capitalize",
    fontWeight: "500"
  },
  Discription:{
    fontSize: 18,
    textAlign:"center"
  },
  courseName:{
    fontWeight: "500",
    padding: 10,
    textTransform : "capitalize",
    borderRadius: 6,
    backgroundColor: "grey",
    margin: 5
  },
  courseDisplay:{
    display:"flex",
    flexDirection: "row",
  },
  Price:{
    fontSize: 20,
    fontWeight: "500",
    width: "100%",
    color: "green",
    // backgroundColor: "red",
    padding: 10
  },
  Btn:{
    width: "100%",
  }

})
export default Course