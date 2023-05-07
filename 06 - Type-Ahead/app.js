const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const form = document.querySelector('.form');
const ul = document.querySelector('.ul');
const input = document.querySelector('.input');
console.log(form, ul, input)


const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    input.addEventListener('keyup', function () {
        filterData(this.value, data);

    });

}
getData();

function filterData(word, data) {
    const regex = new RegExp(word, 'gi');
    // console.log(regex);
    const x = data.filter(item => {
        return item.city.match(regex) || item.state.match(regex)
    });
    // console.log(x);
    const a = ul.innerHTML = x.map(item => {
        const cityName = item.city.replace(regex, `<span class="hl">${input.value}</span>`);
        const stateName = item.state.replace(regex, `<span class="hl">${input.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${item.population}</span>
      </li>
    `;
    }).join('');
};








