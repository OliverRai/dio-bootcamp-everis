
const apiKey = {
    key: 'a7abcd72-ff83-4e8f-b8c1-783a3b182ca1'
}

window.addEventListener('load', () => {
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apiKey.key).then((response) => {
        if(!response.ok) throw new Error("ERRO ao executar a requisição, status: " +response.status);
        return response.json();
    }).then((api) => {
        console.log(api)
                let text = "";

                for (let i = 0; i < 10; i++) {
                    const date = api.data[i].first_historical_data.split('-');
                    console.log(date);

                    text = text + `
                        <div class="media">
                            <img src="img.png" alt="Coin" width="150px" height="80px" class="align-self-center mr-3">
                            <div class="media-body">
                                <h5 class="mt-2">${api.data[i].name}</h5>
                                <p>
                                    ${api.data[i].symbol}<br>
                                    ${date[2].substr(0, 2)}/${date[1]}/${date[0]}
                                </p>
                            </div>
                        </div>
                    `;

                    document.getElementById('coins').innerHTML = text;
                }
            })
            .catch(error => console.error(error.message));
   
    
})