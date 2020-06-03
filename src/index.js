import React, { Fragment } from 'react';
// import styles from './styles.module.css'
// import { Test } from './components';
// import * as maps from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { Map as M } from './components/map';
import { Map, InitMap, Autocomplete } from './components';

// export const InitMap = Init;
export { Map, InitMap, Autocomplete };

export const ExampleComponent = props => {
	return (
		<Fragment>
			<Provider store={store}>
				<InitMap {...props}>{/* <Test /> */}</InitMap>
			</Provider>
		</Fragment>
	);
};
