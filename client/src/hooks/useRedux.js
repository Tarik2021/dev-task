import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/store";

export function useRedux() {
   const dispatch = useDispatch();

   return { useSelector, dispatch, actions };
}
