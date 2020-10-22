import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value)
		},
		value: () => value,
		clear: () => setValue('')
	}
}

function MainForm({ onCreate }) {

	const input = useInputValue('');

	function submitHandler(event) {
		event.preventDefault();

		if(input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}
	}

	return(
		<React.Fragment>
			<div className="createBlock">
				<form className="createForm" onSubmit={ submitHandler }>
					<textarea
						placeholder="..."
						className="createTextarea"
						{ ...input.bind }
					/>
					<Button
						type="submit"
						text="Add"
						classes="addButton"
					/>
				</form>
			</div>
		</React.Fragment>
	)
}

MainForm.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default MainForm;