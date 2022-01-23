import { Provider } from "react-redux";
import { store } from "./store/store";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Tabs from "./components/Tabs";
import Home from "./components/Home";

export default function App() {
   return (
      <Provider store={store}>
         <Navbar />
         <Searchbar />
         <Tabs />
         <Home />
      </Provider>
   );
}
