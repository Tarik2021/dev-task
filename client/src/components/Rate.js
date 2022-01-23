import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRedux } from "../hooks/useRedux";

export default function Rate({ d }) {
   const { useSelector, dispatch, actions } = useRedux();
   const user = useSelector((s) => s.store.user);
   const tab = useSelector((s) => s.store.tab);
   const headers = { Authorization: `Bearer ${user.token}` };

   function onStarsChange(stars) {
      axios
         .post(`/user/rate/${tab}`, { stars, id: d._id }, { headers: headers })
         .then((res) => dispatch(actions.setMyRatings(res.data)))
         .catch((err) => console.log(err));
   }

   function value() {
      let movie = user.movies.find((m) => m.id._id === d._id);
      if (movie) return movie.stars;

      let show = user.shows.find((s) => s.id._id === d._id);
      if (show) return show.stars;

      return 0;
   }

   //prettier-ignore
   return (
      user.token ? 
         <ReactStars 
            size={30} 
            isHalf={true} 
            value={value()}
            onChange={onStarsChange} 
         />
      : null
   );
}
