import React from 'react';

export default function Button({text, handlerClick, type, classes }) {
	console.log(handlerClick)
	return(
		<div className="wrapperButton">
			<button
				type={ type }
				className={ "btn " + (classes ? classes : '') }
				onClick={ handlerClick }
			>
				{ text }
			</button>
		</div>
	)
}