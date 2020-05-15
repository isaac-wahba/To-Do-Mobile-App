import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { AntDesign } from "expo-vector-icons";

export default function App() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState('all');
  const [allTasks, setAllTasks] = useState([]);

  
  let addTaskHandler = () => {
    setAllTasks([...allTasks, {task,isChecked:false}]);
  };


 let checkHandler = (index) => {
   const newTasks = allTasks.map((item,idx)=>{
      
    if (index === idx)
    {
      return {...item, isChecked: !item.isChecked} 

    }
    return item 


   }
   )
  setAllTasks(newTasks);
  
}; 


  const visibleTasks = {
    all: () => allTasks,
    done: () => allTasks.filter(task => task.isChecked),
    active: () => allTasks.filter(task => !task.isChecked)
  }

  return (
    <View style={styles.container}>
      {/* <Header style={styles.header}/>  */}
      <View style={styles.titleBody}>
        <Text style={styles.appName}>Ziko ... To Do App</Text>
        <Text style={styles.appCaption}> To Do it, write it!</Text>
      </View>

      <View style={styles.appBody}>
        <View style={styles.addTask}>
          <TextInput
            style={styles.textField}
            placeholder="  Add now, achieve on time !"
            onChangeText={setTask}
          />
          <AntDesign name="pluscircleo" size={35} onPress={addTaskHandler} />
        </View>
        <View style={styles.buttons}>
          <Text style={styles.all} onPress={() => setFilter('all')}>
            All
          </Text>
          <Text style={styles.active} onPress={() => setFilter('active')} /* onPress={activeHandler} */>Active</Text>
          <Text style={styles.done}onPress={() => setFilter('done')} /* onPress={doneHandler} */>Done!</Text>
        </View>
        <View style={styles.showTasks}>
          <FlatList
            data={visibleTasks[filter]()}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.checkBox}>
                  <AntDesign
                  color={item.isChecked ? 'green': 'black'}
                    name="checkcircleo"
                    size={25}
                  />
                  <Text onPress={() => checkHandler(index)}>{item.task}</Text>
                </View>
              );
            }}
            keyExtractor={(task, index) => String(index)}
            ListEmptyComponent={<Text> No tasks left!</Text>}
            ListHeaderComponent={
              <Text style={styles.leftTasks}>Your Tasks</Text>
            }
            ListFooterComponent={
              <Text style={styles.endOfTasks}> End of tasks!</Text>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: "center",
  },
  /*  header : {
    flex:1,
    backgroundColor:'blue',
  }, */
  titleBody: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26889B",
    alignSelf: "stretch",
  },
  appBody: {
    flex: 5,
    backgroundColor: "#8de4f2",
    padding: 30,
  },

  addTask: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  checkBox: {
    flexDirection: "row",
    marginRight: 10,

  },
  appName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  appCaption: {
    color: "black",
    fontWeight: "normal",
    fontSize: 20,
  },
  textField: {
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 3,
    borderWidth: 1,
    alignSelf: "center",
    marginRight: 25,
  },
  showTasks: {
    flex: 3,
    flexDirection: "column",
  },
  leftTasks: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "red",
    padding: 20,
    width: "100%",
    fontSize: 15,
    borderColor: "black",
    textAlign: "center",
  },

  endOfTasks: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#26889B",
    padding: 20,
    width: "100%",
    fontSize: 15,
    borderColor: "black",
    textAlign: "center",
  },

  buttons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  active: {
    height: 40,
    width: 40,
    flexGrow: 1,
    backgroundColor: "#f448a0",
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 3,
    borderWidth: 1,
    alignSelf: "center",
    width: 70,
    textAlign: "center",
  },
  done: {
    flexGrow: 1,
    height: 40,
    width: 40,
    backgroundColor: "#27ed5c",
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 3,
    borderWidth: 1,
    alignSelf: "center",
    width: 70,
    textAlign: "center",
    padding: 0,
  },

  all: {
    flexGrow: 1,
    height: 40,
    width: 40,
    backgroundColor: "#f7f5da",
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 3,
    borderWidth: 1,
    alignSelf: "center",
    width: 70,
    textAlign: "center",
    padding: 0,
  },
});
