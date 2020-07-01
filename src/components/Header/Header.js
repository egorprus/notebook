import React from 'react';
import Button from '../Button/Button';

export default function Header({ user, logOut }) {
	return (
		<header className="mainHeader">
			<h1>
				Hello, { user }
			</h1>
			<Button
				type="button"
				text="log out"
				handlerClick={ logOut }
			/>
		</header>
	)
}