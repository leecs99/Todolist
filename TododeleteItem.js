import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const TododeleteItem = () => {



  return (
    <View style={styles.container}>
      <Button title={"❌"} onPress={ButtonAlert} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default TododeleteItem;