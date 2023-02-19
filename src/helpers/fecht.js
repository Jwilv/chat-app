const baseUrl = process.env.REACT_APP_URL_BASE;

const fetchWithoToken = async( endpoint, data, method = 'GET' )=>{

    const url = `${baseUrl}/${endpoint}`;
    
    if(method === 'GET'){
        const response = await fetch(url);
        return await response.json();
    }else{
        const response = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:data,
        })
        return await response.json();
    }
}