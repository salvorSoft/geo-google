import React from 'react';
import mapCss from './map.css';
import { useSelector } from 'react-redux';
const zoom = (map, callback) => {
	map.addListener('zoom_changed', function () {
		// eslint-disable-next-line standard/no-callback-literal
		callback('zoom_changed');
	});
};

// eslint-disable-next-line prettier/prettier
export default function Map (props) {

	const { geoMapApp } = useSelector(state => state);

	const { maps, loaded } = geoMapApp;

	const [, setMap] = React.useState();

	React.useEffect(() => {
		// console.log(maps);
		if (loaded) {
			const m = new maps.Map(document.getElementById('map'), {
				center: { lat: -30.397, lng: -60.644 },
				zoom: 5,
			});

			setMap(m);
			if (props.onZoom) {
				zoom(m, props.onZoom);
			}
		}
	}, [maps, loaded, props]);

	// style={props.style}
	// return <div id='map' style={{ width: '40vw', height: '40vh' }} />;
	// return <div id='map' className={mapCss.map} />;
	return <div id='map' className={mapCss.map} style={props.style} />;
}

Map.defaultProps = {
	style: {},
	onZoom: null,
};
