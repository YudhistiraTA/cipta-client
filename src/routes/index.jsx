import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import IronmanPage from "../pages/IronmanPage";
import SearchPage from "../pages/SearchPage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
	},
	{
		path: "/ironman",
		element: <IronmanPage/>
	},
	{
		path: "/search",
		element: <SearchPage/>
	},
	{
		path: "*",
		element: (
			<div style={{minHeight:"100vh"}} className="d-flex flex-column justify-content-center">
				<h1 className="text-center" style={{color:"red"}}>NOT FOUND</h1>
			</div>
		)
	}
]);
export default router;
