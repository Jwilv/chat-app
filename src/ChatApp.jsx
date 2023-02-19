import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./auth/AuthContext"
import { Approuter } from "./router/Approuter"

function ChatApp() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Approuter />
      </BrowserRouter>
    </AuthProvider>

  )
}

export default ChatApp
