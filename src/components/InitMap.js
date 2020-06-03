import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, Provider } from 'react-redux';
import { importScript, config } from './utils/';
import { set } from '../redux/ducks/app';
import store from '../redux/store';

export default function InitMap(props) {
	// console.log(props);
	const dispatch = useDispatch();

	const { googleKey, libraries } = props;

	const { maps } = importScript(
		config.getEndpoint(googleKey, libraries),
		'google',
	);

	React.useEffect(() => {
		// SETEO STATE
		if (maps && Object.keys(maps).length > 0) {
			dispatch(set(maps));
		}
	}, [maps, dispatch]);

	return <Provider store={store}>{props.children}</Provider>;
}

InitMap.defaultProps = {
	libraries: null,
};

InitMap.propTypes = {
	googleKey: PropTypes.string.isRequired,
	libraries: PropTypes.oneOf(['maps']),
};
