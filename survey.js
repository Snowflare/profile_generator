const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let obj = [];
rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  obj['Your name:'] = answer1;
  rl.question("What's an activity you like doing?", (answer2) => {
    obj['Your activity:'] = answer2;
    rl.question("What do you listen to while doing that?", (answer3) => {
      obj['Your activity music:'] = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        obj['Your favourite meal:'] = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          obj['Your favourite food:'] = answer5;
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            obj['Your favourite sport:'] = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              obj['Your superpower:'] = answer7;
              for (let i in obj){
                console.log(i + " " + obj[i]);
                
              }
              rl.close();
            })
          })
        })
      })
    })
  })
});


// 
// 
// 
// 
// 
// 
// 