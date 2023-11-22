import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import { Colors } from "../constants/styles";
import { Avatar } from "react-native-paper";
import Button from "../components/ui/Button";
import ChatScreen from "./ChatScreen";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://tryauth-b9ba0-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);
  //----------------------------------------------------------------------------------
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>Logado</Text>

      <Button
        onPress={() => {
          return <ChatScreen Username={Username}></ChatScreen>;
        }}
      >
        chat
      </Button>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.primary800,
  },
  title: {
    color: Colors.primary100,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
