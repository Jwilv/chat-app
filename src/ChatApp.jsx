import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { SocketProvider } from "./context/SocketContext"
import { Approuter } from "./router/Approuter"

function ChatApp() {

  return (
    <AuthProvider>
      <SocketProvider>
        <BrowserRouter>
          <Approuter />
        </BrowserRouter>
      </SocketProvider>
    </AuthProvider>

  )
}

export default ChatApp
