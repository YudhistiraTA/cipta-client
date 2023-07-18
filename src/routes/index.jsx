import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <p>Home</p>,
	},
	{
		path: "/ironman",
		element: <p>Ironman Giphy</p>
	},
	{
		path: "/search",
		element: <p>Search Giphy</p>
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
