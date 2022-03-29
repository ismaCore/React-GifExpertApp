

export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=10&api_key=K0rUiDPNRFvrWzy2fQzDYuAz723HOpBM`  //el encodeURI es para eliminar los espacios en blanco de la buscqueda de category
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}