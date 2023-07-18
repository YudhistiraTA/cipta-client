import GifItem from "./GifItem";
import PropTypes from "prop-types";

export default function GifList({ gifs }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-32">
			{gifs?.map((gif) => (
				<GifItem key={gif.id} gif={gif} />
			))}
		</div>
	);
}
GifList.propTypes = {
	gifs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired
		})
	).isRequired
};
