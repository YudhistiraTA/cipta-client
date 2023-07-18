import { Link } from "react-router-dom";
import GiphySvg from "../components/GiphySvg";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-5">
			<h1 className="text-4xl font-bold text-neutral-700 mb-5">
				WELCOME TO YOUR GIPHY
			</h1>
			<div className="w-64 h-16 border border-gray-300 shadow-md p-2">
				<div>
					<GiphySvg />
				</div>
			</div>

			<Link to="/ironman" className="text-blue-500 underline">
				<p className="mt-16">IRON MAN GIPHY</p>
			</Link>
			<Link to="/search" className="text-blue-500 underline">
				SEARCH YOUR GIPHY
			</Link>
		</div>
	);
}
