import { BrowserRouter } from "react-router-dom"
import { Approuter } from "./router/Approuter"

function ChatApp() {

  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  )
}

export default ChatApp
