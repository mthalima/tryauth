import axios from "axios";

const API_KEY = "AIzaSyBZnBLfXr5EtfTbSQ8wOZyOGXs3pLSulak";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
