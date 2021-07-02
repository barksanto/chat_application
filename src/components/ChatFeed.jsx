// version 17 do not need to import React
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  // console.log(props);
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages); //this takes the keys from our messages 

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //if there are messages find the last message
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg+${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {
              isMyMessage
                ? <MyMessage />
                : <TheirMessage />
            }
          </div>
          {/* add some styling depending on whose message it is */}
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>

          </div>
        </div >
      )
    })
  }

  renderMessages();



  // renderMessages();

  return (
    <div>
      ChatFeed
    </div>
  );
}

export default ChatFeed