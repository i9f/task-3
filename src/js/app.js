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

$("#select1").select2({
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

function ss (content) {
  return content.map(item => {
    return `<figure class="cryptocurrency__block 
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
}

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
// const btn = document.getElementsByClassName("questions__btn");
// const text = document.getElementsByClassName("questions__btn-droptext");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].onclick = function() {
//     this.classList.toggle("questions__btn_opened");
//     const droptext = this.nextElementSibling;
//     if (droptext.style.maxHeight) {
//       droptext.style.cssText = `margin-bottom: 0;`;
//       droptext.style.maxHeight = null;
//     } else {
//       droptext.style.cssText = `margin-bottom: 19px;`;
//       droptext.style.maxHeight = droptext.scrollHeight + "px";
//     }
//   };
// }

// function hideAcordian() {
//   var accordian_content = document.getElementsByClassName("questions__btn-droptext");
//   // var accordian_content_p = document.getElementsByTagName("p");
//   for (var i = 0; i < accordian_content.length; i++){
//     accordian_content[i].style.height = "0";
//     accordian_content[i].style.visibility = "hidden";
//     // accordian_content_p[i].style.opacity = "0";
//   }
// }

// document.getElementsByClassName("questions__wrapper").onclick = function(event) {
//   const target = event.target;
//   if (target.className == 'questions__btn') {
//     const header = document.getElementsByClassName("questions__btn");
//     const accordian_content = document.getElementsByClassName("questions__btn-droptext");
//     const accordian_content_p = document.getElementsByTagName("p");
//     for (var i = 0; i < header.length; i++) {
//       if (header[i] == target) {
//         if (accordian_content[i].style.visibility == "hidden") {
//           hideAcordian();
//           accordian_content[i].style.height = "100px";
//           accordian_content[i].style.visibility = "visible";
//           accordian_content_p[i].style.opacity = "1";
//         } else {
//           hideAcordian();
//         }
//       }
//     }
//   }
// }

const acc_btns = document.querySelectorAll(".questions__btn");
const acc_contents = document.querySelectorAll(".questions__btn-droptext");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
        acc.classList.remove("active");
        acc_btns.forEach(btn => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".questions__btn")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};
