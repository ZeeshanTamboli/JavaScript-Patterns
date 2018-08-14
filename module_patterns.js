//Basic structure

// (function() {
//   //Declare private variables and functions 

//   return {
//     //Declare public vars and functions
//   }
// })();

//STANDARD MODULE PATTERN
const UICtrl = (() => {
  let text = 'Hello World';

  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (() => {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added....');
  }

  function get(id) {
    return data.find(item => item.id === id)
  }

  return {
    add,
    get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));