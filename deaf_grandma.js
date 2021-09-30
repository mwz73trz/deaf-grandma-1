let numberOfGoodbyes = 0;

function deafGrandma() {
  var prompt = require("prompt");
  //
  // Start the prompt
  //
  prompt.start();

  prompt.get(["userInput"], function (err, result) {
    if (result.userInput === "") {
      console.log("WHAT?!");
      deafGrandma();
    } else if (result.userInput === "GOODBYE!" && numberOfGoodbyes === 1) {
      console.log("LATER, SKATER!");
      return;
    } else if (result.userInput === "GOODBYE!") {
      console.log("LEAVING SO SOON?");
      deafGrandma();
      numberOfGoodbyes++;
    } else if (result.userInput === result.userInput.toUpperCase()) {
      console.log("NO, NOT SINCE 1946!");
      deafGrandma();
    } else {
      console.log("SPEAK UP, KID!");
      deafGrandma();
    }
  });
}

deafGrandma();
