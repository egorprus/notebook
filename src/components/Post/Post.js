import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

function Post({ post, removePost }) {
	return (
		<div className="postBlock">
			<div className="postItem">
				<div className="postBody" /*data-title={ post.title }*/>
					{ post.body }
				</div>
				{/* <div className="postBody editTextarea hide" data-title={ post.title }>
					<textarea />
				</div> */}
				<footer className="postFooter">
					{ post.update }
				</footer>
			</div>
			<div className="option">
				<div className="optionItem">
					<Button
						text="delete"
						handlerClick={ () => removePost(post.id) }
						classes="btnDelete"
					/>
				</div>
			</div>
		</div>
	)
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	index: PropTypes.number
}

export default Post;