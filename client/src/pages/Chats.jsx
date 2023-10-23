
import { PrettyChatWindow } from 'react-chat-engine-pretty';
 


const Chats = ({user}) => {



  return (
    <div style={{height: "100vh"}}>
      <PrettyChatWindow   projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
      username={user.username}
      secret={user.secret} style={{height: "100%"}}/>
    </div>
  )
}

export default Chats