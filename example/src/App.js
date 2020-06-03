import React from 'react'

import { ExampleComponent, Map, Autocomplete } from 'geo'
// import styles from './index.css';
import 'geo/dist/index.css'

const App = () => {
  return (
	<ExampleComponent googleKey="AIzaSyDSPlHaJ-LXOpMCG1ERsFaeiyi3IkLzXK8">
		<div>
			<Autocomplete placeholder="ACAAAA!!!" onChange={e => {console.log(e)}} />			
		</div>
		  {/* <Map onZoom={e => { console.log(e); }}  /> */}
		  {/* <Map onZoom={e => { console.log(e); }} style={{ width: '100vw', height: '40vh' }} /> */}
		  
		  {/* <div className={styles.map}>
		</div> */}
	</ExampleComponent>
          
	//   <InitMap googleKey="AIzaSyDSPlHaJ-LXOpMCG1ERsFaeiyi3IkLzXK8">
	// 	  <ExampleComponent  text="Create React Library Example 😄" />
	//   </InitMap>
  )
}

export default App
