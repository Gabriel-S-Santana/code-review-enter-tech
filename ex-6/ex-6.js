class Livro {
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }

    imprimir() {
        console.log(this.titulo);
        console.log(this.autor);
        console.log(this.ano);
    }
  }

let livros = new Livro('Carros', 'Alberto', 2010);
livros.imprimir();


// ------------------------------------------------------------------------------------

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log('faz baruio ai fio')
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log('Au Au')
  }
}

let doguinho = new Cachorro('doguinho');
doguinho.emitirSom();