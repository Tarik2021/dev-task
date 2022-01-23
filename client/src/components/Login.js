import { GoogleLogin } from "react-google-login";
import { useRedux } from "../hooks/useRedux";
import { Button } from "@mui/material";
import axios from "axios";

export default function Login() {
   const { useSelector, dispatch, actions } = useRedux();
   const user = useSelector((s) => s.store.user);

   const id = process.env.REACT_APP_BASE_URL || "485732674724-b8pg8jbdh3ntg6ohoe6g1nmhqeu7meqt.apps.googleusercontent.com";

   function googleLoginHandler(res) {
      axios
         .post("/user/login", {
            tokenId: res.tokenId,
            googleId: res.googleId,
         })
         .then((res) => dispatch(actions.loginUser(res.data)))
         .catch((err) => console.log(err));
   }

   function googleLogoutHandler() {
      dispatch(actions.logoutUser());
   }

   return !user.token ? (
      <GoogleLogin
         clientId={id}
         cookiePolicy={'single_host_origin'}
         render={(e) => (
            <Button onClick={e.onClick} variant="contained" color="primary" style={{ marginTop: "5px" }}>
               google login
            </Button>
         )}
         onSuccess={googleLoginHandler}
      />
   ) : (
      <Button variant="outlined" color="primary" onClick={googleLogoutHandler}>
         logout
      </Button>
   );
}
