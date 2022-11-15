"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se 
  indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido 
  "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  
 }

BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right){
      this.right.insert(value);
    } 
    else{
      this.right = new BinarySearchTree(value);
    }
  } 
  else if(value < this.value){
    if(this.left){
      this.left.insert(value);
    }
    else{
      this.left = new BinarySearchTree(value);
    }
  }
}
BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) count+= this.left.size();
  if (this.right) count+= this.right.size();
  return count;
    // //no tengo en ningun lado
    // if (!this.left && !this.right) return 1;
    // // tengo de un solo lado
    // else if (!this.left) return 1 + this.right.size();
    // else if (!this.right) return 1 + this.left.size();
    // // tengo en ambos y se apllica la recursión
    // else return 1 + this.left.size() + this.right.size();
  }
BinarySearchTree.prototype.contains = function (value) {
    if (this.value === value) return true; // NO
    // tengo algo a la izquierda Y el valor está a la izquierda?
    if (this.left && this.left.contains(value)) return true;
    // tengo algo a la derecha Y el valor está a la derecha?
    if (this.right && this.right.contains(value)) return true;
    return false;
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
  switch (type){
    case "pre-order":
      cb(this.value); //ejecuto el nodo
      if(this.left) this.left.depthFirstForEach(cb,type) //me fijo si hay izquierda, si hay ejecuta la izquierda con el metodo
      if(this.right) this.right.depthFirstForEach(cb,type)
      break; //rompe

    case "post-order":
      if(this.left) this.left.depthFirstForEach(cb,type)
      if(this.right) this.right.depthFirstForEach(cb,type)
      cb(this.value);
      break;
    
    default:
      if(this.left) this.left.depthFirstForEach(cb,type)
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb,type)
      break;
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue) {
  //mientras no tenga una lista crea una, ejecuta el cb, si hay izquierada lo pushea a la queue [] 
  //lo misma a la derecha
  if (!queue) { 
  var queue = [];
  }
  cb(this.value); //ejecuto la cb
  if (this.left) queue.push(this.left); //si tengo un hijo a la izquierda lo pushea a la queue
  if (this.right) queue.push(this.right);// ""
  //mientras haya algo en el queue[] saca el primero y ejecuta el metodo
  if (queue.length > 0){ //toma el primer coso del array y vuelve a ejecutar el metodo sobre ese
    queue.shift().breadthFirstForEach(cb, queue);
  // tengo que ejectuar para tomar los hijos, despues tomo el hijo y lo ejecuto y tomo sus hijos, 
  // despues paso al segundo hijo y asi sucesivamente hasta qeu no tenga mas
  }
}

//  var milista = BinarySearchTree()
//  milista.insert(7)
//  console.log(milista)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
