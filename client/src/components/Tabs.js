import { MOVIES, SHOWS } from "../constants/constants";
import { Typography } from "@mui/material";
import { useRedux } from "../hooks/useRedux";
import { useGetData } from "../hooks/useGetData";

export default function Tabs() {
   const { useSelector, dispatch, actions } = useRedux();
   const getData = useGetData();
   const tab = useSelector((s) => s.store.tab);
   const user = useSelector((s) => s.store.user);

   function onTabClickHandler(tab) {
      dispatch(actions.setData([]));
      dispatch(actions.setSearch(""));
      dispatch(actions.setTab(tab));
      getData(tab);
   }

   //prettier-ignore
   return (
      <>
         <div style={styles.tabs}>
            <Typography 
               sx={tabStyle(tab, MOVIES)} 
               onClick={() => onTabClickHandler(MOVIES)} 
               children={capitalize(MOVIES)} 
            />
            <Typography 
               sx={tabStyle(tab, SHOWS)} 
               onClick={() => onTabClickHandler(SHOWS)}
               children={capitalize(SHOWS)} 
            />
         </div>
         {user.token && <div style={styles.tabs}>
            <Typography 
               sx={tabStyle(tab, `my-${MOVIES}`)} 
               onClick={() => onTabClickHandler(`my-${MOVIES}`)} 
               children={capitalize(`My ${MOVIES}`)} 
            />
            <Typography 
               sx={tabStyle(tab, `my-${SHOWS}`)} 
               onClick={() => onTabClickHandler(`my-${SHOWS}`)}
               children={capitalize(`My ${SHOWS}`)} 
            />
         </div>}
      </>
   );
}

const styles = {
   tabs: {
      display: "flex",
      justifyContent: "center",
   },
};

function tabStyle(tab, param) {
   return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "200px",
      cursor: "pointer",
      margin: "2px",
      border: `${tab === param ? "1.6px" : "1.2px"} solid ${tab === param ? "rgb(25,118,210)" : "rgba(0, 0, 0, 0.2)"}`,
      borderRadius: "3%",
   };
}

function capitalize(word) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}
