
// NAVIGATION - PASSING ACTIVE CLASS TO LI   
$('#navigation').on('click', 'li', function(){
   $('#navigation li').removeClass('active');
   $(this).addClass('active');
});



// FORM VALIDATION

const fname = document.getElementById('fname');
const email = document.getElementById('email');
const formJs = document.getElementById('formJs');
const errorElement = document.getElementById('error');


formJs.addEventListener('submit', (e) => {

   let messages = []

   if (fname.value === '' || fname.value == null) {
      messages.push('Name is required');
   } 
   
   if (email.value === '' || email.value == null) {
      messages.push('Email is required');
   } 
   
   if (subject.value === '' || subject.value == null) {
      messages.push('Subject is required');
   }

   if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(', ');
   }
   
});



// QUOTES

const quotes = [
   {
      name: 'Louis Srygley',
      quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.'
   },{
      name: 'Ralph Johnson',
      quote: 'Before software can be reusable it first has to be usable.'
   },{
      name: 'Gerald Weinberg',
      quote: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.'
   },{
      name: 'Anonymous',
      quote: 'It’s not a bug – it’s an undocumented feature.'
   },{
      name: 'Jessica Gaston',
      quote: 'One man’s crappy software is another man’s full-time job.'
   },{
      name: 'Doug Linder',
      quote: 'A good programmer is someone who always looks both ways before crossing a one-way street.'
   },{
      name: 'Martin Golding',
      quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.'
   }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
   let number = Math.floor(Math.random()*quotes.length);
   quoteAuthor.innerHTML = quotes[number].name;
   quote.innerHTML = quotes[number].quote;
};

