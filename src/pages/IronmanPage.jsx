import { useEffect, useState } from "react";
import axios from "axios";
import GifList from "../components/GifList";
import GridLoader from "react-spinners/GridLoader";

export default function IronmanPage() {
	const [gifs, setGifs] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await axios.get(
				"https://api.giphy.com/v1/gifs/search",
				{
					params: {
						q: "Iron Man",
						api_key: import.meta.env.VITE_GIPHY_API_KEY,
						limit: 9
					}
				}
			);
			setGifs(data.data);
			setLoading(false);
		})();
	}, []);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-5">
			<h1 className="text-4xl font-bold text-neutral-700 mb-5">
				IRON MAN GIPHY
			</h1>
			{loading ? (
				<GridLoader color="rgba(121, 202, 255, 0.92)" size={64} />
			) : (
				<GifList gifs={gifs} />
			)}
		</div>
	);
}
