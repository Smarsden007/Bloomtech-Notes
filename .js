const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
//.forEach() method
// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))





//dot map variable
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)0


//.findINdex method

//const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
  });
  
  const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
  });