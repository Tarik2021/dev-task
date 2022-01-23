import axios from "axios";
import { useRedux } from "./useRedux";

export function useGetData() {
   const { dispatch, actions } = useRedux();
   const baseUrl = "/imdb/get-data/";

   async function getData(category, term) {
      let url = baseUrl + category;
      if (term) url = url + "/" + term;
      axios
         .get(url)
         .then((res) => dispatch(actions.setData(res.data)))
         .catch((err) => console.log(err));
   }

   return getData;
}
