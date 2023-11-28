/* const age = 22
const loc = 's'
const promille = 3
if (age >= 18 && promille <= 1){
    console.log('Grattis du får gå på krogen')
}
else console.log('Du har för högt promille')
if (age < 18) {
    console.log('Du får vänta ett tag till innan det är okej att gå på krogen')
}
 */

/* const age = 66
if (age >= 18 && age <= 65) alert('Du är myndig.')
else if (age > 65) alert('Lastgammal.')
else alert('Du är omyndig.') */

/* const age = 18
if (age >= 25 && age <=65) alert('Resan kostar 30kr.')
else if (age > 65) alert('Pensionnärspris resan kostar 20kr.')
else alert('Studentrabatt resan kostar 20kr.') */

/* const age = 1980
if (age >= 1980 && age <= 1989) console.log('Du är född på 80-talet.')
else if (age >= 1990 && age <= 1999) console.log('Du är född på 90-talet')
else console.log('Du är född utanför 80 och 90 talet.') */

/* const password = 'hejhej'
const accName = 'Karin'
let inputAccName = prompt('Ange användarnamn:')
if (inputAccName == accName){
    alert('Korrekt användarnamn.')
} else alert('Fel användarnamn') 

let inputPassWord = prompt('Ange lösenord:')
if (inputPassWord == password){
    alert('Lösenord korrekt')
} else alert('Felaktigt lösenord') */

/* const land = prompt('Vart bor du?')
if (land == 'sverige' || land == 'danmark' || land == 'norge') alert('Du bor i Skandinavien.')
else alert('Du bor utanför Skandinavien.') */

/* const carBrand = prompt('Vilken bil kör du?')
if (carBrand == 'volvo') alert('Du kör en svensk bil.')
else if (carBrand == 'volksvagen' || carBrand == 'bmw' || carBrand == 'audi') alert('Du har en tysk bil.')
else if (carBrand == 'renault' || carBrand == 'citroen' || carBrand == 'peugeot') alert('Du kör en fransk bil.') */

/* for (let i = 0; i <= 9; i++){
    console.log(i)
} */

/* let numOne = prompt('Ange ett nr.')
let numTwo = prompt('Ange ett till tal som är större än det första.')
for (let i = numOne; i <= numTwo; i++){
    console.log(i)
} */


/* while(true){
    let num1 = parseInt(prompt('Ange ett tal:'))
    let num2 = parseInt(prompt('Ange ett till tal:'))
    let result = parseInt(num1) + parseInt(num2)
    alert(`Summan av ${num1} och ${num2} blir ${result}.`)
    if(prompt('Vill du fortsätta? Ja eller nej') == 'nej'){
        break
    }
} */

/* let summa = 0;
for(let i = 0; i < 10; i++){
    let tal1 = parseInt(prompt('Ange tal ' + (i+1)))
    summa += tal1;
}
console.log(summa) */

/* let tal = parseInt( prompt('Ange tal'))
for(let i = tal-1; i > 0; i--){
    console.log(i)
} */

/* while(true){
    let tal = prompt('skriv ett tal')
if (tal <= 9) alert('talet är för lågt')
else if (tal >= 11) alert('talet är för stort')
else {
    alert('rätt') 
    break
}
}
 */

/* let reverseNumber = function(num){
    if(Number.parseInt(num) === NaN){
        return NaN
    }
    let n = num.toString()

    let reverse = ""
    for(let i = n.length-1;i >= 0; i-- ){
        reverse += n[i].toString()
    }

    return reverse
}

console.log(reverseNumber(12240)) */


/* let  niceCase = function(text){
    let beforeWasSpace = true;
    let result = ""
    for(let i = 0; i < text.length;i++){
        if(beforeWasSpace){
            result = result + text[i].toUpperCase()
        }else{
            result = result + text[i]
        }
        if(text[i] === ' '){
            beforeWasSpace = true;
        } else{
            beforeWasSpace = false;
        }
    }
    return result
}
console.log(niceCase("hello world")) */

/* let canIBuyBeer = function() {
    let age = prompt('Hur gammal är du?');
    if (age > 18 && age < 65) {
        console.log('Ja, du kan köpa öl!');
        } else { console.log('Du är för ung')
}}
canIBuyBeer(); */

/* let canIBuyBeer = function(age,loc,promilleHalt){
    if(promilleHalt > 1){
        return false;
    }
    if(loc == 'S' && age >= 20){
        return true;
    }
    if(loc == 'K' && age >= 20){
        return true;
    }
    return false
}



let age = 0
let loc = ''
let promille = 0
while(true){
    age = parseFloat(prompt("Ange ålder"))
    if(age <0 || age > 150){
        alert("Mellan 0 och 150 tack")
    }else{
        break
    }
}


while(true){
    promille = parseFloat(prompt("Ange promille"))
    if(promille <0 || promille > 2.5){
        alert("Mellan 0 och 2.5 tack")
    }else{
        break
    }
}

while(true){
    loc = prompt("Ange plats S eller L")
    if(loc == "S" || loc == "L"){
        break;
    }
    alert('S eller L tack')
}

console.log(canIBuyBeer(age,loc,promille)) */

/* let samling = [1 ,2 , 3, 4, 5]
console.log(samling[0], samling[2], samling[4]) */

/* let mixedArrays = [1, '1', 1.1, '24', true]
console.log(mixedArrays.length) */

/* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
for(let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i].toUpperCase()) */

/* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]} are big IT companies.`)
console.log(itCompanies.join(", "))
 */

/* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
exists = "a company is not found"
searchFor = "IBM"
for(let i = 0; i < itCompanies.length;i++){
    if(itCompanies[i] === searchFor){
        exists = itCompanies[i]
    }
 }
 console.log(exists) */

/*  let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
 let result = []
 for(let i = 0; i < itCompanies.length;i++){
     let numberOs = 0
     for(let j = 0;j < itCompanies[i].length; j++){
         if(itCompanies[i][j].toUpperCase() == 'O'){
             numberOs++;
         }
 
     }
     if(numberOs >= 2){
         result.push(itCompanies[i])
     }
  }
 
  console.log(result) */

  /* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.sort()
  console.log(itCompanies) */

/*   let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.reverse()
  console.log(itCompanies) */

  /* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  const slicat = itCompanies.slice(0, 3)
  console.log(slicat) */

  /* let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  const slicat = itCompanies.slice(2, 5)
  console.log(slicat) */

/*   let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  let start = Math.floor(itCompanies.length/2)
  let end = Math.ceil(itCompanies.length/2)
  const slice3a = itCompanies.slice(start,end)
  console.log(slice3a) */

/*   let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.splice(0, 1)
  console.log(itCompanies) */

 /*  let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.splice(itCompanies.length/2, 1)
  console.log(itCompanies) */

/*   let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.splice(itCompanies.length-1)
  console.log(itCompanies) */

/*   let itCompanies = ['Google', 'Facebook', 'Amazon', 'IBM', 'Oracle']
  itCompanies.splice(0,itCompanies.length)
  console.log(itCompanies) */

/* for(let i = 0; i < 10; i++)
console.log(i) */

/* let tal1 = parseInt(prompt('skriv ett tal'))
let tal2 = parseInt(prompt('skriv ett tal till'))
for(let i = tal1; i <= tal2; i++){
    console.log(i)
} */

