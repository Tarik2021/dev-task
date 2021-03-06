import { useEffect, useState } from "react";
import { useRedux } from "../hooks/useRedux";
import { Grid, Button, Container } from "@mui/material";
import { useGetData } from "../hooks/useGetData";

import Card from "./Card";

export default function Home() {
   const { useSelector } = useRedux();
   const getData = useGetData();
   const data = useSelector((s) => s.store.data);
   const tab = useSelector((s) => s.store.tab);
   const user = useSelector((s) => s.store.user);
   const [showMore, setShowMore] = useState(10);

   useEffect(() => {
      setShowMore(10);
      getData(tab);
   }, [tab]);

   function showMoreHandler() {
      setShowMore((prevShowMore) => prevShowMore + 10);
   }

   //prettier-ignore
   return (
      <Container>
         <Grid container style={styles.home} >

            {data 

            ? data
            .slice(0, showMore)
            .map((d) => <Card key={d._id} d={d} tab={tab} />) 

            : user.token 
            ? [...user[tab.slice(3)]]
            .sort((a, b) => b.stars - a.stars)
            .slice(0, showMore)
            .map((d) => <Card key={d._id} d={d.id} />)
            : null

            }
         {data.length > showMore
            && <Button 
                  variant="contained" 
                  color="primary" 
                  style={styles.more} 
                  onClick={showMoreHandler} 
                  children="Show more" 
               />
         }
         </Grid>
      </Container>
   );
}

const styles = {
   home: {
      padding: "10px",
      justifyContent: "center",
   },
   more: {
      width: "100%",
   },
};
