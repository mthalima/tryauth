import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

import { Avatar } from "react-native-paper";
import { Colors } from "../constants/styles";

function ChatScreen({ Username }) {
  return (
    <View style={OverallContainer}>
      <View>
        <Avatar.Image
          size={24}
          source={require("../assets/profile-img.jpeg")}
        />
        <Text>{Username}</Text>
      </View>
      <TextInput></TextInput>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  OverallContainer: {
    flex: 1,
    backgroundColor: Colors.primary100,
    justifyContent: "center",
    alignItems: "center",
  },

  profileContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
