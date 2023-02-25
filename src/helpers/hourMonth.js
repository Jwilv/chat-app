import moment from "moment"


export const hourMonth = (hour)=>{
    const today = moment(hour);
    
    return today.format('HH:mm a | MMM Do');
}