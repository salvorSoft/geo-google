import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// eslint-disable-next-line prettier/prettier
export default function Autocomplete(props) {
	const { placeholder, size, onChange } = props;

	const { geoMapApp } = useSelector(state => state);

	const { maps, loaded } = geoMapApp;

	const [, setAut] = React.useState();

	React.useEffect(() => {
		if (loaded) {
			const { places } = maps;

			const options = {};

			var input = document.getElementById('searchTextField');

			const autocomplete = new places.Autocomplete(input, options);

			autocomplete.addListener('place_changed', () => {
				if (onChange) {
					onChange(autocomplete.getPlace());
				}
				// console.log('place_changed');
				// console.log(autocomplete.getPlace());
				// const myPlace = autocomplete.getPlace();
				// console.log(myPlace.geometry.location.lat());
				// console.log(myPlace.geometry.location.lng());
			});

			setAut(autocomplete);
		}
	}, [loaded, maps]);

	return (
		<input
			id='searchTextField'
			type='text'
			size={size}
			placeholder={placeholder}
		/>
	);
}

Autocomplete.defaultProps = {
	style: {},
	onZoom: null,
	placeholder: 'Anything you want!',
	size: 50,
	onChange: () => null,
};

Autocomplete.propTypes = {
	placeholder: PropTypes.string,
	size: PropTypes.number,
	onChange: PropTypes.func,
};
