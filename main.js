function fetchJsonData() {
    return {
        item: '',
        async init() {
            const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
            const data = await response.json();
            this.item = data.homeTown;
        }
    }
}

function fetchImageData() {
    return {
        image: '',
        async init() {
            const response = await fetch('https://dummyjson.com/image/150');
            this.image = response.url;
        }
    }
}