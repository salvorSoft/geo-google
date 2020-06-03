const endpoint = {
	maps: 'https://maps.googleapis.com/maps/api/js?key=',
};
function getEndpoint(key, libraries) {
	let lib = '&libraries=maps,places';

	lib += libraries ? `${libraries}` : '';

	return `${endpoint.maps}${key}${lib}`;
}

export default { endpoint, getEndpoint };
