//slider
$(function() {
  $('.blog__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })
});

//mobile menu
const mobileNavButton = document.querySelector('.header__mobile-btn');
const mobileNavIcon = document.querySelector('.header__mobile-icon');
const mobileNav = document.querySelector('.header__mobile-nav');

mobileNavButton.addEventListener('click', function() {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('hidden');
});

// input mask
$('#tel').mask('+44 (999) 999-9999');

// custom select
function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="./image/flags/' +  state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>');
  return $state;
};

$("#select").select2({
  minimumResultsForSearch: -1, //скрыть строку поиска
  templateResult: formatState,
  templateSelection: formatState,
  // disabled: true, //раскомментировать, если надо сделать селект неактивным
	dropdownCssClass: "form-select"
});

$("#footer-select").select2({
  minimumResultsForSearch: -1, //скрыть строку поиска
  templateResult: formatState,
  templateSelection: formatState,
  // disabled: true, //раскомментировать, если надо сделать селект неактивным
	dropdownCssClass: "footer-select"
});

//api
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const grid = document.querySelector('.cryptocurrency__grid');
const mobile_show = 10;
const desktop_show = 19;

async function getResponse() {
  const response = await fetch(url);
  let content = await response.json();
  // console.log(content);

  content.forEach((item, i) => {
    grid.innerHTML += `<figure class="cryptocurrency__block 
    ${i < mobile_show ? ``: 
      i < desktop_show ? `cryptocurrency__block_mobile-hidden`:
      `cryptocurrency__block_desktop-hidden`}" 
      tabindex="0"><img src="${item.image}" alt="${item.symbol} icon"> 
      <figcaption class="cryptocurrency__block-content">
        <span class="cryptocurrency__block-title">${item.symbol}</span>
        <span class="cryptocurrency__block-text">${item.name}</span>
      </figcaption>
    </figure>`
  })
  grid.innerHTML += 
  `<div class="cryptocurrency__block cryptocurrency__block_mobile-hidden" tabindex="0">
  <button type="button" class="cryptocurrency__btn">And many others</button>
  </div>`
}
getResponse()


//accordion
const btns = document.querySelectorAll(".questions__btn");

btns.forEach((btn) => {
  btn.onclick = function() {
    hideAll();

    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }
});

function hideAll() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
    btn.nextElementSibling.classList.remove("active");
  }
)};
