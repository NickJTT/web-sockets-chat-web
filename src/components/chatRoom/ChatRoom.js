import React from 'react';
import useChat from './../../hooks/useChat';
import style from './ChatRoom.module.css';

const ChatRoom = props => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState('');

  const newMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const onSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className = { style.chatRoom }>
      <h3>{ roomId }</h3>
      <ol>
          { messages.map((message, i) => (
            <li key = { i } className = { message.ownedByCurrentUser ? style.myMessage : style.receivedMessage }>{ message.body }</li>
          )) }
      </ol>
      <textarea value = { newMessage } onChange = { newMessageChange } placeholder = 'Write message...'/>
      <button type = 'submit' onClick = { onSendMessage }>Send</button>
    </div>
  );
};

export default ChatRoom;