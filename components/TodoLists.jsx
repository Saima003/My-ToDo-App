import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const dummyData = [
    {
        id: "01",
        title: "Wash Car"
    },
    {
        id: "02",
        title:"Brush your teeth"
    }
]
const TodoLists = () => {
    const renderTodos =({item, index}) =>{
        return(
            <View style={styles.renderTodo}>
                <Text style={styles.renderedText}>{item.title}</Text>
            </View>
        )
    }
  return (
    <SafeAreaView>
    <View style={styles.viewStyle}>
      <Text >My To Do</Text>
      <TextInput style={styles.inputField} placeholder='Add a Task'/>
      <TouchableOpacity style={styles.touchableStyle}>
        <Text style={styles.addButtonStyle}>Add Task</Text>
      </TouchableOpacity>

      <FlatList data={dummyData} renderItem={renderTodos}/>
    </View>
    </SafeAreaView>
  )
}

export default TodoLists

const styles = StyleSheet.create({
inputField:{
    borderWidth:2,
    borderColor:"#1e90ff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal:16,
    marginTop: 20,

},
viewStyle:{
    marginHorizontal:16,
    marginTop: 20,
},
touchableStyle:{
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical:12,
    marginVertical:34,
    alignItems:"center"
},
addButtonStyle:{
    color: "white",
    fontWeight:"bold",
    fontSize:20,
},
renderTodo:{
backgroundColor:"#1e90ff",
borderRadius:6,
paddingHorizontal: 6,
paddingVertical: 12,
marginBottom: 12
},
renderedText:{
    color:"white",
    fontSize:15,
    fontWeight:"800"
}
})