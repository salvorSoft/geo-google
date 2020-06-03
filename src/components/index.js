import React from 'react';
import Init from './InitMap';
import * as map from './map';
import * as aut from './autocomplete';
// import styles from '../styles.module.css'
export const Map = map.Map;
export const Autocomplete = aut.Autocomplete;

export function InitMap(props) {
	return <Init {...props} />;
}
