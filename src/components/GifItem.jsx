import PropTypes from "prop-types";

function GifItem({ gif }) {
	return (
		<picture className="flex flex-col items-center justify-center bg-slate-100 border border-gray-300 shadow-md p-2">
			<img src={gif.images.fixed_width.webp} />
		</picture>
	);
}

GifItem.propTypes = {
	gif: PropTypes.shape({
		images: PropTypes.shape({
			fixed_width: PropTypes.shape({
				webp: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	}).isRequired
};

export default GifItem;
