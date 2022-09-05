const fibonacci = (n) => {
  if(n === 1) return [1]
   let inicio=1
   let final =1;
   let todos = [inicio, final]
 
   for(let i=1; i<n-1; i++){
    let nuevo = inicio + final;
     todos.push(nuevo);
     inicio = final;
     final = nuevo;
   }
 return todos;
 }


//console.log(fibonacci(8))

module.exports = fibonacci;