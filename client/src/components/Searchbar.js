import { TextField } from "@mui/material";
import { useRedux } from "../hooks/useRedux";
import { useGetData } from "../hooks/useGetData";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
   const getData = useGetData();
   const { useSelector, dispatch, actions } = useRedux();
   const search = useSelector((s) => s.store.search);
   const tab = useSelector((s) => s.store.tab);

   useEffect(() => {
      if (search.length > 1) 
         getData(tab, search);
      else getData(tab);
   }, [search]);

   function onSearchChange(e) {
      dispatch(actions.setSearch(e.target.value));
   }

   //prettier-ignore
   return (
      <div style={{display: "flex", justifyContent: "center"}}>
         <TextField 
            style={styles.search} 
            size="small" 
            placeholder="search.." 
            value={search}
            onChange={onSearchChange}
            InputProps={{ endAdornment: <SearchIcon /> }} 
         />
      </div>
   );
}

const styles = {
   search: {
      margin: "10px",
      width: "420px",
   },
};
