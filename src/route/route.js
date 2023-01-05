import MainRoot from "../companents/MainRoot";
import Basket from "../companents/page/Basket";
import Home from "../companents/page/Home";


const ROUTES = [{ path: "/", element: <MainRoot />, children: [{ path: "", element: <Home /> }, { path: "basket", element: <Basket/> }] }]





export default ROUTES