const URL=`https://api.thedogapi.com/v1/images/search`;

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector(`img.api`);
        img.src = data[0].url;
});