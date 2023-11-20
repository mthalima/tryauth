import { Alert, StyleSheet, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import LoadingPopup from "../components/ui/LoadingPopup";
import { login } from "../util/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { Colors } from "../constants/styles";

function LoginScreen() {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Falha de autenticação", "Login ou senha inválido.");
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return (
      <LoadingPopup animating={true} size={"large"} message="Logando..." />
    );
  }

  return (
    <View style={styles.loginView}>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: {
    backgroundColor: Colors.primary100,
    flex: 1,
  },
});
