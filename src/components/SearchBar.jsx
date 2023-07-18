import PropTypes from "prop-types";

export default function SearchBar({ query, setQuery, search }) {
	return (
		<form
			className="block"
			onSubmit={(event) => {
				event.preventDefault();
				search();
			}}
		>
			<input
				type="text"
				className="block rounded w-full"
				placeholder="search"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
		</form>
	);
}

SearchBar.propTypes = {
	query: PropTypes.string.isRequired,
	setQuery: PropTypes.func.isRequired,
	search: PropTypes.func.isRequired
};
