import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";
import client from "../api/client";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const login = async (email, password) => {
    const result = await client.post("/auth", { email, password });
    if (!result.ok) return setLoginError(true);
    setLoginError(false);

    // storeUser(result.data);
    return result;
  };

  const register = async (registerInfo) => {
    const { name, email, password } = registerInfo;
    const result = await client.post("/users", { name, email, password });
    if (!result.ok) return setRegisterError(true);
    setRegisterError(false);

    return await login(result.data.email, result.data.password);
  };

  const storeUser = (authToken) => {
    authStorage.storeToken(authToken);
    const user = jwtDecode(authToken);
    setUser(user);
  };
  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {
    user,
    login,
    loginError,
    register,
    registerError,
    storeUser,
    logout,
  };
};
