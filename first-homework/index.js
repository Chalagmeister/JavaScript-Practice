/* დავალება 1 */
/* გააერთიანეთ მოცემული ობიექტები 1 ობიექტში */
const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};

const mergedProduct = { ...productsFeatures, ...productProperties };
console.log(mergedProduct);

/* ობიექტის სახე უნდა იყოს ასეთი */
// {
//     name: 'Product X',
//     description: 'A high-quality product with many features.',
//     price: 100
//     color: 'red',
//     size: 'medium',
//     weight: 5 
// }

/* დავალება 2 */
/* დამიბეჭდეთ პროდუქტების ფასის ჯამი */
const productz = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];


// We start from 0 because we want the accumulator to be a number.
const totalPrice = productz.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

/* ჯამი უნდა იყოს 225 */

/* დავალება 3 */
/* გაფილტრეთ მოცემული მასივი ფასის მიხედვით, რომლებიც მეტია 240-ზე */
/* გამოიყენეთ .filter() მეთოდი */
const products = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

const filteredProducts = products.filter(outcome => outcome.price > 240)
console.log(filteredProducts)

/* დავალება 4 */
/* დაწერე ფუნქცია, რომელსაც გადაეცემა რიცხვების მასივი და დააბრუნებს მასივში არსებული რიცხვების სამმაგ მნიშვნელობებს */
// გადასაცემი მასივი
const numbers = [33, 10, 99, 95];
// მიღებული შედეგი უნდა იყოს [99, 30, 297, 285]

function multiplier (numbers) {
    return numbers.map(tripled => tripled * 3)
}
console.log(multiplier(numbers));

/* ---------------- REDUCE LEARNING NOTES ---------------- */
/*
Rule of thumb:
1) map    -> transform each item, return a new array
2) filter -> keep some items, return a smaller array
3) reduce -> combine all items into one final value

Why initial value (like 0) matters:
- If you do NOT pass initial value, reduce uses the first array item as accumulator.
- In exercise 1 (numbers), it can still work because first item is a number.
- In exercise 2 (objects), it breaks logic because first item is an object, not a number.
- Best practice for sums: always pass 0.
*/

/*
Template:
array.reduce((acc, item) => {
    // update acc
    return acc;
}, initialValue);
*/

/* Exercise 1: Sum all numbers */
const ex1Numbers = [5, 10, 15, 20];
const ex1Result = ex1Numbers.reduce((sum, number) => sum + number, 0);
console.log(ex1Result);
// Expected output: 50

/* Exercise 2: Sum product prices */
const ex2Products = [
    { name: "A", price: 100 },
    { name: "B", price: 75 },
    { name: "C", price: 50 }
];
const ex2Result = ex2Products.reduce((sum, product) => sum + product.price, 0);
console.log(ex2Result);
// Expected output: 225

/* Exercise 3: Count how many numbers are even (detailed version) */
const ex3Numbers = [1, 2, 3, 4, 5, 6, 8];
const ex3Result = ex3Numbers.reduce((count, number) => {
    // number % 2 === 0  -> true for even numbers
    const isEven = number % 2 === 0;

    // If current number is even, increase count by 1.
    // Otherwise keep count as it is.
    if (isEven) {
        return count + 1;
    }
    return count;
}, 0);
console.log(ex3Result);
// Expected output: 4

// Same logic in short form:
// const ex3Short = ex3Numbers.reduce((count, number) => number % 2 === 0 ? count + 1 : count, 0);

/* Exercise 4: Build an object of name -> price */
const ex4Products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 700 }
];

// Beginner version (easier to read first):
const ex4ForOf = {};
for (const product of ex4Products) {
    ex4ForOf[product.name] = product.price;
}
console.log(ex4ForOf);

// Reduce version (same result):
const ex4Result = ex4Products.reduce((acc, product) => {
    acc[product.name] = product.price;
    return acc;
}, {});
console.log(ex4Result);
// Expected output: { Laptop: 1200, Phone: 700 }

/* Exercise 5: Group words by first letter */
const ex5Words = ["apple", "ant", "banana", "boat", "cat"];

// Beginner version (easier to read first):
const ex5ForOf = {};
for (const word of ex5Words) {
    const firstLetter = word[0];
    if (!ex5ForOf[firstLetter]) {
        ex5ForOf[firstLetter] = [];
    }
    ex5ForOf[firstLetter].push(word);
}
console.log(ex5ForOf);

// Reduce version (same result):
const ex5Result = ex5Words.reduce((acc, word) => {
    const firstLetter = word[0];
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
}, {});
console.log(ex5Result);
// Expected output:
// {
//   a: ["apple", "ant"],
//   b: ["banana", "boat"],
//   c: ["cat"]
// }
