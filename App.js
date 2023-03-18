import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    endTaskHandler(false);
  }

  function deleteTaskHandler(id) {
    setTasks((currentCourseTasks) =>
      currentCourseTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Task"
          color="#a065ec"
          onPress={startAddTaskHandler}
        />
        <TaskInput
          visible={modalIsVisible}
          onAddTask={addTaskHandler}
          onCancel={endTaskHandler}
        />
        <View style={styles.TasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTaskHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  TasksContainer: {
    flex: 5,
  },
});
