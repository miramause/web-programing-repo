(function() {
  console.log("Завдання 1:")
  console.log("Якщо ім’я починається з літери j або J, то застосунок виводить Goodbye JSomeName, інакше – Hello SomeName.");
 
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim", "jason"];
  
  console.log("\nПочатковий масив:");
  for (let i = 0; i < names.length; i++) 
  {
    console.log(names[i]);
  }
  
  console.log("\nМодифікований масив:");
  for (var i = 0; i < names.length; i++) 
  {
    if (names[i].charAt(0) === "J" || names[i].toLowerCase().charAt(0) === "j") 
    {
      Bye2.Bye(names[i]);
    } 
    else 
    {
      Hello2.Hello(names[i]);
    }
  }
})();


console.log("\n\n");

(function() {
  console.log("Завдання 2:")
  console.log("Знайти суму ASCII-кодів літер імен та порівняння її значення із порогом - 365.");
 
  var Names = ["Mira", "Max", "Angelina", "Keira", "Jen", "jason"];
  
  console.log("\nПочатковий масив:");
  for (let i = 0; i < Names.length; i++) 
  {
    console.log(Names[i]);
  }
  
  console.log("\nМодифікований масив:");

  for (var j = 0; j < Names.length; j++) {
    var spliting = Names[j].split('');
  
  
    var Names_Summ = spliting.map(function (letter) {
        return letter.charCodeAt(0);
    })
    .reduce(function (first, next) { 
        return next + first;
    });
    if (Names_Summ > 365) 
    {
      console.log("----------------------");
      console.log("сума: "+ Names_Summ);
      Bye2.Bye(Names[j]);
      console.log("----------------------");
    } 
    else 
    {
      console.log("----------------------");
      console.log("сума: "+ Names_Summ);
      Hello2.Hello(Names[j]);
      console.log("----------------------");
    }
}
})();

