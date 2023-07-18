import { useState } from "react";
import axios from "axios";
import GifList from "../components/GifList";
import GridLoader from "react-spinners/GridLoader";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
	const [gifs, setGifs] = useState(null);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState("");
	function search() {
		(async () => {
			setLoading(true);
			const { data } = await axios.get(
				"https://api.giphy.com/v1/gifs/search",
				{
					params: {
						q: query,
						api_key: import.meta.env.VITE_GIPHY_API_KEY,
						limit: 9
					}
				}
			);
			setGifs(data.data);
			setLoading(false);
		})();
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-5 p-10">
			<h1 className="text-4xl font-bold text-neutral-700 mb-5">
				SEARCH YOUR GIPHY
			</h1>
			<SearchBar query={query} setQuery={setQuery} search={search} />
			{loading ? (
				<GridLoader color="rgba(121, 202, 255, 0.92)" size={64} />
			) : gifs ? (
				<GifList gifs={gifs} />
			) : (
				<></>
			)}
		</div>
	);
}
