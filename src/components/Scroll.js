import React from 'react';


const Scroll =(props)=> {
	return(
		<div style= {{overflowY:'scroll', border:'3px solid black', height:'600px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;


/*Three types of components:- 
!> Props
2> State
3> Children */
 