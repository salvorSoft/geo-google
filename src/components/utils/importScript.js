import { useEffect, useState } from 'react';

const importScript = (resourceUrl, lib) => {
	const [library, setLibrary] = useState({});

	useEffect(() => {
		const script = document.createElement('script');
		script.src = resourceUrl;
		script.async = true;
		script.addEventListener('load', d => {
			if (lib) {
				setLibrary(window[lib]);
			}
		});
		// script.addEventListener('error', d => {

		// })
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [resourceUrl]);

	return library;
};
export default importScript;
