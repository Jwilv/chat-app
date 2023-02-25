import { animateScroll } from "react-scroll"


export  const scrollToBotton = (id)=>{
    animateScroll.scrollToBottom({
        containerId:'message',
        duration: 0,
    })
}

export  const scrollToBottonAnimated = (id)=>{
    animateScroll.scrollToBottom({
        containerId:'message',
        duration: 250,
    })
}
