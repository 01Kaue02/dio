const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        numb: document.querySelector('numb'),

    },
    values:{ 
        gameVelocity: 1000,
        timerId: null,
    },

}


function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
}
function moveEnemy( ) { 
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);

}
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
    });
}
function init() {
    moveEnemy();
}
init();