import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";

import { Avatar } from "react-native-paper";
import { Colors } from "../constants/styles";

function ChatScreen({ Username }) {
  return (
    <View style={styles.OverallContainer}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={70}
          source={require("../assets/profile-img.jpeg")}
        />
        <Text style={styles.username}>Zallera</Text>
      </View>
      <View style={styles.chatHistory}></View>
      <TextInput
        style={styles.TextInputContainer}
        cursorColor={Colors.error100}
      ></TextInput>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  OverallContainer: {
    flex: 1,
    backgroundColor: Colors.primary100,
  },

  avatar: {
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: Colors.lightblack,
    width: 77,
    height: 77,
    alignItems: "center",
    borderRadius: 200,
    elevation: 10,
  },

  profileContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    elevation: 10,
  },

  username: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
  },

  chatHistory: {
    flex: 2,
  },

  TextInputContainer: {
    marginBottom: 20,
  },
});
