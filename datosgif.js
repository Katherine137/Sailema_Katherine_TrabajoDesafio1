const obtenerGif = async () => {
    // solucion 1
    const gifContainers = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif'); 

    const request = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=goku"); 

    const respuesta = await request.json();

    console.log (respuesta.data[0]);

    respuesta.data.slice(0,8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = gif.images.original.url;
        gifContainers.appendChild(newGifCard);
    });
    gifTemplate.remove();
    //solucion 2

    /* 
    const request = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=goku"); 

    const respuesta = await request.json();

    const gitUrl = respuesta.data[0,8].images.original.url;
    const img = document.querySelector("#gif img");
    img.src = gitUrl;
    */
};

obtenerGif();