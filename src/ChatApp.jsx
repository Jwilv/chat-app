import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { ChatProvider } from "./context/chat/ChatContext"
import { SocketProvider } from "./context/SocketContext"
import { Approuter } from "./router/Approuter"

function ChatApp() {

  return (
    <AuthProvider>
      <ChatProvider>
        <SocketProvider>
          <BrowserRouter>
            <Approuter />
          </BrowserRouter>
        </SocketProvider>
      </ChatProvider>
    </AuthProvider>

  )
}

export default ChatApp
