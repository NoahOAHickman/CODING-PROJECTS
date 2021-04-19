// For my version of the Mixed Messages Codecademy project, I'm going to create 
// a bad advice generator. It's just going to dole out bad, randomly generated advice to the user. 
// it will output a format string with 3 peices of data in it, all randomly selected from a list of words
// I will also include a 'Name your firstborn child ${literalRandomLetters}', because why not have a 
// legitimately randomly generated portion in there?

const verbs = ['Give', 'Sell', 'Move', 'Take', 'Burn', 'Inhale'];
const people = ['child', 'neighbor', 'cousin', 'father', 'grandparents'];
const objects = ['drugs', 'a timeshare', '100 lottery tickets', 'books'];
let wordOne = verbs[Math.floor(Math.random() * verbs.length)];
let wordTwo = people[Math.floor(Math.random() * people.length)];
let wordThree = objects[Math.floor(Math.random() * objects.length)];
if (wordOne === 'Move' || wordOne === 'Burn' || wordOne === 'Take' || wordOne === 'Inhale'){
    if (wordTwo === 'grandparents'){
        wordTwo = wordTwo + '\''
    }else{
    wordTwo = wordTwo + '\'s';
}
    if (wordThree === 'a timeshare'){
        wordThree = wordThree.replace('a timeshare', 'timeshare');
    }
}


let badAdvice = `${wordOne} your ${wordTwo} ${wordThree}`;
console.log(badAdvice);


