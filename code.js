function clearAll() {
  
  const memeContainer = document.querySelector('#gatoImg'); //Seleciona o container id=meme
  const funnyContainer = document.querySelector('#funny'); //Seleciona o container id=funny 
  const wisdomContainer = document.querySelector('#wisdom'); //Seleciona o container id=wisdom 
  const riddleContainer = document.querySelector('#riddle'); //Seleciona o container id=riddle   
   
  memeContainer.innerHTML = ''; //Deleta conteudo
  funnyContainer.innerHTML = ''; //Deleta conteudo
  wisdomContainer.innerHTML = ''; //Deleta conteudo
  riddleContainer.innerHTML = ''; //Deleta conteudo
}

function fotoDeGato() {
  clearAll();
  const gatoAleatorio = getRandomData('gatinhos'); //String com uma url aleatória

  const gatoNome = document.createElement('h1'); //Cria uma tag p para a frase
  const gatoFoto = document.createElement('img'); //Cria uma tag p para o autor
  gatoNome.textContent = gatoAleatorio.nome; //Coloca a string quote como conteudo da tag
  gatoFoto.setAttribute('src', gatoAleatorio.foto); //Coloca a string author como conteudo da 

  document.getElementById('gatoImg').appendChild(gatoNome); //Adiciona conteudo
  document.getElementById('gatoImg').appendChild(gatoFoto);
}

function calcularIdade() {
  
  const idadeHumana = document.querySelector('input').value;
  let idadeGato = 0;
  
  for(let i = 0; i < idadeHumana; i++){
    if(i === 0){
      idadeGato += 15;
    } else if (i === 1){
      idadeGato += 9;
    } else {
      idadeGato += 4;
    }
  }

  if(idadeHumana == 0) {
    alert('Insira uma idade válida!\nNúmeros inteiros de 1 à 99');
  } else {
    alert('Seu gato tem ' + idadeGato + ' anos em idade humana');
  }
}

function showJoke() {
  //clearAll();
  //const randomJoke = getRandomData('jokes'); //String aleatória
  
  //const newJoke = document.createElement('p'); //Cria uma tag p
  //newJoke.textContent = randomJoke; //Coloca a string como conteudo da tag

  //document.getElementById('funny').appendChild(newJoke); //Adiciona conteudo
  //alert('Não');
}

function showQuote() {
  /*clearAll();
  const randomQuote = getRandomData('quotes'); //Objeto aleatório
  
  const newQuote = document.createElement('p'); //Cria uma tag p para a frase
  const newAuthor = document.createElement('p'); //Cria uma tag p para o autor
  newQuote.textContent = randomQuote.quote; //Coloca a string quote como conteudo da tag
  newAuthor.textContent = "–" + randomQuote.author; //Coloca a string author como conteudo da tag

  document.getElementById('wisdom').appendChild(newQuote); //Adiciona conteudo quote
  document.getElementById('wisdom').appendChild(newAuthor); //Adiciona conteudo author*/
}

function showRiddle() {
  /*clearAll();
  const randomRiddle = getRandomData('riddles'); //Objeto aleatório
  
  const newQuestion = document.createElement('p'); //Cria uma tag p para a pergunta
  const newAnswer = document.createElement('p'); //Cria uma tag p para a resposta
  newQuestion.textContent = randomRiddle.question; //Coloca a string question como conteudo da tag
  newAnswer.textContent = "Answer: " + randomRiddle.answer; //Coloca a string answer como conteudo da tag
  newAnswer.setAttribute('id', 'resposta'); //Adiciona id

  document.getElementById('riddle').appendChild(newQuestion); //Adiciona conteudo question
  newAnswer.hidden = true; //Esconde a resposta
  document.getElementById('riddle').appendChild(newAnswer); //Adiciona conteudo answer*/
}

function revealAnswers() {
    /*const container = document.querySelector('#riddle'); //Pega o container de riddle
    const resposta = container.querySelector('#resposta'); //Pega a p #resposta

    if (resposta === null) {
        alert('Gere um Riddle antes de abrir uma resposta!'); //Avisa que resposta está vazio
    } else if (!resposta.hidden) {
        alert('A resposta já está disponível!'); //Avisa que já tem uma respota visivel
    } else {
        resposta.hidden = false; //Mostra resposta
    }*/
}

/**
* This function is used to get random data.  Don't worry about how it works, just know how to use it.  Usage is pre-filled in the functions above already, but here's an explanation of the function anyways.
* 
* Valid arguments:
*
* 'memes', 'jokes', 'quotes', 'riddles'
*
* Return values:
* 
* For meme data: 
* A string representing an image url
* 
* For joke data: 
* A string representing the joke
* 
* For quote data:
* An object - { quote: '', author: '' }
* 
* For riddle data:
* An object - { question: '', answer: '' }
*
* Example usage: getRandomData('quotes');
*/
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// ----------------------------------------------------
// NO NEED TO CHANGE ANYTHING BELOW but...
// feel free to add/remove items from these lists to customize
// your results
// ----------------------------------------------------

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const gatinhos = [
  { foto: 'img/sophie.png', nome: 'Sophie'},
  { foto: 'img/branquinha.png', nome: 'Branquinha'},
  { foto: 'img/sarue.png', nome: 'Saruê'},
  { foto: 'img/pinky.png', nome: 'Pinky'},
  { foto: 'img/mau.png', nome: 'Mau'},
  { foto: 'img/meevin.png', nome: 'Meevin'},
  { foto: 'img/milly.png', nome: 'Milly'},
  { foto: 'img/gosha.png', nome: 'Gosha'}
];
// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
  { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
  { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
  { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
  { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
  { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
  { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  gatinhos,
  jokes,
  quotes,
  riddles
};