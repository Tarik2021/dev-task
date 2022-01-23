import { AppBar, Toolbar, Typography } from "@mui/material";
import Login from "./Login";

export default function Navbar() {
   return (
      <AppBar sx={styles.bar}>
         <Toolbar>
            <Typography sx={styles.headline} children="IMDb" />
            <Login />
         </Toolbar>
      </AppBar>
   );
}

const styles = {
   bar: {
      position: "static",
      backgroundColor: "black",
   },
   headline: {
      flexGrow: 1,
      fontSize: "3rem",
      color: "gold",
   },
};
