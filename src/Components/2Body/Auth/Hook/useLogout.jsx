import axios from "axios";
import { useAuth } from "../../../Context/useAuth";

export const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios(
        "https://clone-netflix-77383829fc51.herokuapp.com/logout",
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};
