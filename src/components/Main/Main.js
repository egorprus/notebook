import React, { useState } from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';
import MainForm from '../MainFrom/MainForm';

export default function Main({ login, logOut }) {

	const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem(login)));

	function removePost(id) {
		localStorage.setItem(login, JSON.stringify(userInfo.posts.filter(post => post.id !== id)));
		setUserInfo(userInfo.posts.filter(post => post.id !== id));
	}

	function addPost(body) {
		let newPost = [{
				body,
				userId: login
			}];
		if(userInfo === null) {
			newPost[0].id = '1';
			let updateUserInfo = {
					posts: newPost,
					lastSession: "16.03.2020"
				};
			localStorage.setItem(login, JSON.stringify(updateUserInfo));
			setUserInfo(updateUserInfo);
		} else {
			newPost[0].id = userInfo.posts.length + 1;
			const updatePost = userInfo.posts.concat(newPost);
			let updateUserInfo = {
					posts: updatePost,
					lastSession: "16.03.2020"
				};
			localStorage.setItem(login, JSON.stringify(updateUserInfo));
			setUserInfo(updateUserInfo);
		}
	}

	function availabilityPost() {
		if(userInfo !== null && userInfo.posts.length !== 0) {
			console.log(userInfo.posts.length)
			return true;
		} else {
			return false;
		}
	}
	return (
		<div className="wrapper">
			<Header user={ login } logOut={ logOut } />
			<MainForm onCreate={ addPost } />
			<article className="postWrapper">
				{ availabilityPost() ? (userInfo.posts.filter(post => post.userId === login ).map( post =>{
					return <Post
								post={ post }
								key={ post.id }
								removePost={ removePost }
							/>
					})
					) : <div className="">
							<p>asdfasdasdasd as das</p>
						</div>
				}
			</article>
		</div>
	)
}