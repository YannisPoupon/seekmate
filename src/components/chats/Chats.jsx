import React from "react";
import { ChatEngine } from "react-chat-engine";
import { Card, Row } from 'react-bootstrap';

const Chats = () => {
    return (
		<>
			<Row className="justify-content-md-center">
				<Card style={{ width: '80vw', height: '60vh' }}>
					<Card.Body>
						<ChatEngine
							userName='Keteb'
							userSecret='YOU_SHALL_NOT_PASS'
							projectID='73937fd1-42cf-4229-95f0-ea2add163df7'
						/>
					</Card.Body>
				</Card>
			</Row>
		</>
    )
};

export default Chats;