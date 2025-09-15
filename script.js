let scoreStr = localStorage.getItem('Score'); // Score came from last line code to store the stringify version
let score;
resetScore(scoreStr);
// let score = {
//     win: 0,
//     loss: 0,
//     tie: 0,
// };
// To maintain Score locally as well as in alert also!
// if(scoreStr !== undefined){
//     score = JSON.parse(scoreStr);
// }else{ 
//     win: 0,
//     loss: 0,
//     tie: 0,
// }    
// };

// OR

// let score = JSON.parse(scoreStr) || { 
//     win: 0,
//     loss: 0,
//     tie: 0,
// }    
// };
function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        loss: 0,
        tie: 0,
    };

    score.displayScore = function () {
        return `Won:${score.win},Lost:${score.loss},Tie: ${score.tie}`;
    }
    showResult();
}

function generateCompChoice() {
    let ranNum = Math.random() * 3;
    if (ranNum > 0 && ranNum <= 1) {
        return 'Bat';
    } else if (ranNum > 1 && ranNum <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}
function getResult(userMove, compMove) {
    if (userMove === 'Bat') {
        if (compMove === 'Bat') {
            score.tie++;
            return `It's a tie`;
        } else if (compMove === 'Ball') {
            score.win++;
            return `User has Won`;
        } else if (compMove === 'Stump') {
            score.loss++;
            return 'Computer has Won.';
        }
    } else if (userMove === 'Ball') {
        if (compMove === 'Ball') {
            score.tie++;
            return `It's a tie.`;
        } else if (compMove === 'Bat') {
            score.loss++;
            return `Computer has Won.`;
        } else if (compMove === 'Stump') {
            score.win++;
            return `User has Won.`;
        }
    } else if (userMove === 'Stump') {
        if (compMove === 'Ball') {
            score.loss++;
            return `Computer has Won`;
        } else if (compMove === 'Bat') {
            score.win++;
            return `User has Won.`;
        } else if (compMove === 'Stump') {
            score.tie++;
            return `It's a tie.`;
        }
    }
}

function showResult(userMove, compMove, result) {
    localStorage.setItem('Score', JSON.stringify(score))
    document.querySelector('.userMove').innerText = userMove ? `You have chosen ${userMove}` : '';
    document.querySelector('.compMove').innerText = compMove ? `Computer has chosen ${compMove}` : '';
    document.querySelector('.result').innerText = result || '';
    document.querySelector('.score').innerText= `${score.displayScore()}`;

}