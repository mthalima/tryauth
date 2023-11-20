import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function LoadingPopup({ animating, size, message }) {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator
        animating={animating}
        size={size}
        color={Colors.primary800}
      ></ActivityIndicator>
    </View>
  );
}

export default LoadingPopup;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },

  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
