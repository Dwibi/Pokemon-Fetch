fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const pokemons = data.results
        let card = '';
        pokemons.forEach((post) => {
            const myId = post.url.split('/')
            card +=
                `<div class="box">
						<div class="image-box">
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${myId[6]}.png" alt="${post.name}" class="image-pokemon">
						</div>
						<div class="name-box">
							<p class="name-pokemon">${post.name}</p>
							<a href="${post.url}" class="url-pokemon">${post.url}</a>
						</div>
					</div>`;
        })
        document.getElementById('output').innerHTML = card;
    })
    .catch(
        err => document.getElementById('output').innerHTML = `${err}`
    );