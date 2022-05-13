// custom select
function formatState (state) {
  if (!state.id) { return state.text; }
  let states = $(
    '<span><img src="./image/flags/' +  state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>');
  return states;
};

export function custom_select() {
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

	$("#mobile-select").select2({
		minimumResultsForSearch: -1, //скрыть строку поиска
		templateResult: formatState,
		templateSelection: formatState,
		// disabled: true, //раскомментировать, если надо сделать селект неактивным
		dropdownCssClass: "footer-select"
	});
}
