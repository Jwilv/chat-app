import { animateScroll } from "react-scroll"


export  const scrollToBotton = (id)=>{
    animateScroll.scrollToBottom({
        containerId:'message',
        duration: 0,
    })
}
