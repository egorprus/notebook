import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';

export default function PostViews({ login }) {
    const initialPosts = JSON.parse(localStorage.getItem(login)).posts;
	const [userInfo,setUserInfo] = useState({posts : initialPosts});
	function removePost(id) {
		let posts = userInfo.posts.filter(post => post.id !== id);
		
		localStorage.setItem(login, JSON.stringify({posts}));
		setUserInfo({posts});
	}

	function addPost(body) {
		let newPost = {
				body,
				userId: login
			};
		if(!userInfo) {
			newPost.id = 1;
			updateUserInfo(newPost);
		} else {
			newPost.id = userInfo.posts.length + 1;
			updateUserInfo(newPost);
		}
	}
	function updateUserInfo(newPost) {
		let updateUserInfo = {
			posts: [...userInfo.posts, newPost]
		};
		localStorage.setItem(login, JSON.stringify(updateUserInfo));
		setUserInfo({posts: updateUserInfo.posts});
	}

	function availabilityPost() {
		if(userInfo !== null && userInfo.posts.length !== 0) {
			return true;
		} else {
			return false;
		}
	}

    return (
        <React.Fragment>
            <AddPost onCreate={ addPost } />
			<article className="postWrapper">
				{ availabilityPost() ? (userInfo.posts.map( post =>{
					return <Post
								post={ post }
								key={ post.id }
								removePost={ removePost }
							/>
					})
					) : <div className="">
							<p>Add post</p>
						</div>
				}
			</article>
        </React.Fragment>
    )
}