import React, {useRef, useState, useEffect} from "react";

import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';
import { ChatEngineWrapper, ChatSocket, ChatFeed } from "react-chat-engine";
import { Card, Row } from 'react-bootstrap';

import {auth} from "../../firebase"

export default function Chats() {
	const didMountRef = useRef(false);
	const [loading, setLoading] = useState(true);
	const {user} = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () =>{
		await auth.signOut();
		navigate.push('/');
	}

	const getFile = async (url)=>{
		let response =await fetch(url);
		let data = await response.blob();
		return new File([data], "test.png", {type: "image/png"});
	}

	const goProfilePage = () =>{
		navigate("/profile");
	}

	useEffect(()=>{
		if(!didMountRef.current){
			didMountRef.current = true;

			if(!user || user === null){
				navigate('/');
				return;
			}

			axios.get('https://api.chatengine.io/users/me/',{
				headers:{
					'project-id':'73937fd1-42cf-4229-95f0-ea2add163df7',
					'user-name': user.email,
					'user-secret': user.uid,
				},
			})
			.then(() => setLoading(false))

			.catch((e)=>{
				let formdata = new FormData();
				formdata.append("email", user.email);
				formdata.append("username", user.displayName);
				formdata.append("secret", user.uid);

				getFile(user.photoURL).then((avatar)=>{
					formdata.append("avatar", avatar, avatar.name);
					axios.post('https://api.chatengine.io/users/', formdata, {
						headers:{
							"private-key": "9999eea6-7abf-46d4-805e-3d29a618ade2"
						},
					})
					.then(()=> setLoading(false))
					.catch((e)=>console.log("e", e.response));
				});
			});
		}
	}, [user, navigate]);
	if(!user || loading) return <div/>;
    return (
		<>
			<div onClick={handleLogout}>
				Logout
			</div>
			<div onClick={goProfilePage}>Profile</div>
			<Row className="justify-content-md-center">
				<Card style={{ width: '80vw', height: '60vh' }}>
					<ChatEngineWrapper>
						<ChatSocket
							userName={user.email}
							userSecret={user.uid}
							chatID='79934'
							chatAccessKey='ca-697eafd7-c8a8-4f19-908e-1553eea70236'
							projectID='73937fd1-42cf-4229-95f0-ea2add163df7'
						/>
						<ChatFeed activeChat="79934"/>
					</ChatEngineWrapper>
				</Card>
			</Row>
		</>
    )
};
