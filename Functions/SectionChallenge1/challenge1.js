'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

Did not follow step 3, wanted to explore a display button 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // This gnerates [0, 0, 0, 0]. more in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const message = `${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)`;
    this.processInput(prompt(message));
  },

  processInput: function (input) {
    if (input !== '0' && input !== '1' && input !== '2' && input !== '3') {
      console.log('input error');
      this.registerNewAnswer();
    } else {
      this.answers[Number(input)]++;
    } // end if
  },

  displayResults: function () {
    document.querySelector('.results').textContent = `Poll results are ${[
      ...this.answers,
    ]}`;
  },
}; // end poll

const registerNewAnswerEvent = poll.registerNewAnswer.bind(poll);
document
  .querySelector('.poll')
  .addEventListener('click', registerNewAnswerEvent);

const displayEvent = poll.displayResults.bind(poll);
document
  .querySelector('.displayResults')
  .addEventListener('click', displayEvent);
