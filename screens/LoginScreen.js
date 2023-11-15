import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { login } from "../util/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";

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
    return <LoadingOverlay message="Logando..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
