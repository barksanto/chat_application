import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="9313184b-ed2c-4f73-8d7b-c7732711f349"
      userName="barkley"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;