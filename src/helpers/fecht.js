
const baseUrl = import.meta.env.VITE_APP_API_URL

export const fetchWithoToken = async( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        const resp = await fetch( url );
        return await resp.json();
    } else {
        const resp = await fetch( url, {
            method : method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })

        const body = await resp.json();

        return await body
    }

}