import React from 'react';
import CardList from './CardList';


const SearchBox = ({searchfield,searchChange}) =>{
	return(
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-light-green" 
				type='search' 
				placeholder='Search robots'
				onChange={searchChange}/>
		</div>	
	);
}

export default SearchBox;