import { Grid, Typography } from "@mui/material";

import Rate from "./Rate";

export default function Card({ d }) {
   //prettier-ignore
   return (
      <Grid item style={styles.card}>
         <div>
            <img style={styles.image} src={d.image} alt={`${d.name} image`} />
            <div style={styles.stars}><Rate d={d} /></div>
            <Typography variant="h6" children={d.title} />
            <Typography variant="subtitle2" children={d.crew} />
         </div>
         <div style={styles.info}>
            <Typography children={`Release: ${d.year}`} />
            <div style={styles.ratings}>
               <Typography children={`IMDb rating: ${d.imDbRating}`} />
               <Typography children={`Stars: ${d.imDbRating / 2}`} />
            </div>
         </div>
      </Grid>
   );
}

const styles = {
   card: {
      textAlign: "center",
      padding: "10px",
      margin: "10px",
      width: "250px",
      height: "420px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "rgba(200,200,200,0.2)",
      boxShadow: "1px 1px 3px 1px #000000",
   },
   image: {
      width: "120px",
   },
   info: {
      textAlign: "left",
   },
   ratings: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
   },
   stars: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
};
