import { View, Text, StyleSheet, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#5e0acc" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5a0acc",
  },
  taskText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#210644",
  },
});
