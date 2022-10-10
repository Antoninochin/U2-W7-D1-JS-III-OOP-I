

class Person {

    constructor(nome, cognome, dataDiNascita) {
        this.nome = nome
        this.cognome = cognome
        this.dataDiNascita = dataDiNascita
    }
//   createDiv(){
//      let utentDiv = document.createElement('div')
//      utentDiv.classList.add('utent')
//       utentDiv.innerHTML = this.nome
//       return utentDiv
//   }
}


let utents = [
    new Person("Frank ", "Rossi ", 1996),
    new Person("Johnny ", "Enderson ", 1994),
    new Person("Andy ","Smith ", 1990),
    new Person("Thomas ","DeNiro ", 1925),
    new Person("Fabian ","Gonzàlez ",1953 ),
    new Person("Drake ","Fontain ",1949 ),
    new Person("Josh ","Martinez ", 1928)
]
 
console.log(utents)

 
  function aggiungi(event){
      let container = document.getElementById('utents-list')
    for(let i = 0; i < utents.length; i++){
        let utent = utents[i]
        
        container.innerHTML += utent.nome
        container.innerHTML += utent.cognome 
        container.innerHTML += utent.dataDiNascita +  "<br>" 
    }
  }
  
// function Aggiungi(){
//   for(let utent of utents){
//       let utentsList = document.getElementById('utents-list')
//      let utentDiv = utent.createDiv()
//       utentsList.appendChild(utentDiv)
//       utentsList.innerHTML
//  }
// }
