import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
import LoadingPopup from "../components/ui/LoadingPopup";

function SignupScreen() {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Erro de autenticação", "Tente mais tarde");
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingPopup animating={true} size={"Large"} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
