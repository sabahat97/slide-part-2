//working with object and arrays

type book ={
    tittle : string
    authore : string
    isbn : string
}
let libraries: book[]= [{tittle : "the hobbit", authore: "J.J.R", isbn : "123930"},
{tittle : "beautifull life", authore :"GB Grat", isbn :"1239039"},
{tittle :"life live", authore:"bride FG", isbn :"239920"}];

libraries.push(
    {tittle :"the catcher in the eye", authore:"J D slinger", isbn :"1309879"}
);
console.log (libraries);


//find a book of authore

let findbook = libraries.find(book => book.tittle === "the hobbit");
console.log(findbook);
// output [{tittle : "the hobbit", authore: "J.J.R", isbn : "123930"},
// {tittle : "beautifull life", authore :"GB Grat", isbn :"1239039"},