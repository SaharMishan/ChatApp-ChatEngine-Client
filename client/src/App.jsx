import "./App.css"
import { useState } from "react"
import Auth from "./pages/Auth"
import Chats from "./pages/Chats"

function App() {
  
  const [user,setUser] = useState(undefined)

  const onAuth = (user)=>{
setUser(user)
  }

if(!user) {
  return <Auth onAuth={onAuth}/>
} else{
  return <Chats user={user}/>
}
}

export default App
