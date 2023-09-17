
function chooseRating (rating) {
	rating.classList.add('master__grid__item--choosed');
};

function removeChoosedRating (ratings) {
	ratings.forEach(e => e.classList.remove('master__grid__item--choosed'));
};

function getResultFromRating() {
	document.querySelector('.modal__result__num').innerHTML = 
	document.querySelector('.master__grid__item--choosed').innerHTML
}

function chooseAndClean(ratings) {
	ratings.forEach(item => item.addEventListener('click', () => {removeChoosedRating(ratings);
																  chooseRating(item);
														  		  getResultFromRating()}));

}

function hide(e) {
	document.querySelector(e).classList.add('hidden')
}

function unhide(e) {
	document.querySelector(e).classList.remove('hidden')
}

function thanks(btn) {
	btn.addEventListener('click', () => {hide('.master'); unhide('.modal')})
}

chooseAndClean(document.querySelectorAll('.master__grid__item'));
thanks(document.querySelector('.master__btn'))
