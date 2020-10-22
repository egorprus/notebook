import React, { useState } from 'react';
import PostViews from '../PostViews/PostViews';
import Header from '../Header/Header';

export default function Main() {
	const login = 'a'
	return (
		<div className="wrapper">
			<Header user={ login } logOut={ () => console.log('happy') } />
			<PostViews login={ login } />
		</div>
	)
}