const startLoan = 215000;
const monthlyPaymentSum = 2500
let startDate = new Date(2019,02, 26)
let todaysDate = new Date()



const numberOfMonths = todaysDate.getMonth() - startDate.getMonth() +
 (12 * (todaysDate.getFullYear() - startDate.getFullYear()));



const downPaid = numberOfMonths * monthlyPaymentSum;
const remainingSum = startLoan-downPaid;
console.log(remainingSum)

const mainFlex = document.querySelector('.mainDiv')
const textDiv = document.querySelector('.carLoan')
const newDiv = document.createElement('div')
newDiv.textContent = `Dere har betalt på billånet siden 26.02.2019. 
Totalt er det betalt ned ${downPaid}Kr på billånet.  Det er ${remainingSum}Kr igjen av startlån på ${startLoan}Kr.`

textDiv.appendChild(newDiv);
