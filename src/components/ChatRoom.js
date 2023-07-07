// ChatRoom.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, deleteMessage } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatRoom = () => {
    const messages = useSelector((state) => state.message.messages);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
  
    const handleAddMessage = () => {
      const newMessage = {
        id: Date.now(),
        username: user.username, // Use the username from the logged-in user
        text: 'Hello, world!', // Replace with the actual message content
        timestamp: new Date(),
      };
  
      dispatch(addMessage(newMessage));
    };
  
    const handleDeleteMessage = (messageId) => {
      dispatch(deleteMessage(messageId));
    };

  return (
    <div className="container">
      <h2 className="mt-4">Chat Room</h2>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={handleAddMessage}>Add Message</button>
      </div>
      <ul className="mt-4">
  {messages.map((message) => (
    user && message.username === user.username && (
      <li className="mb-2" key={message.id}>
        <span className="font-weight-bold">{message.username}: </span>
        <span>{message.text}</span>
        <button className="btn btn-danger ml-2" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
      </li>
    )
  ))}
</ul>

    </div>
  );
};

export default ChatRoom;
