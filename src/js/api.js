//api
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const grid = document.querySelector('.cryptocurrency__grid');
const mobile_show = 10;
const desktop_show = 19;

export async function getResponse() {
  try {
    const response = await fetch(url);
    let content = await response.json();

    content.forEach((item, i) => {
      grid.insertAdjacentHTML ("beforeend",
      `<figure class="cryptocurrency__block 
      ${i < mobile_show ? ``: 
        i < desktop_show ? `cryptocurrency__block_mobile-hidden`:
        `cryptocurrency__block_desktop-hidden`}" 
        tabindex="0"><img src="${item.image}" alt="${item.symbol} icon"> 
        <figcaption class="cryptocurrency__block-content">
          <span class="cryptocurrency__block-title">${item.symbol}</span>
          <span class="cryptocurrency__block-text">${item.name}</span>
        </figcaption>
      </figure>`);
    })
    grid.insertAdjacentHTML ("beforeend",
    `<div class="cryptocurrency__block cryptocurrency__block_mobile-hidden" tabindex="0">
    <button type="button" class="cryptocurrency__btn">And many others</button>
    </div>`);
  } catch (err) {console.log(err)}
}