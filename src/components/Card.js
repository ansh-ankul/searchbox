import React from 'react';

const Card =({name,email,id}) =>{
	return(
		<div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/ ${id} ?size=100x100`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
		);
}

export default Card;