var lista=["Gervronilson", " Estrada A", " Linha B ", 1880,  18.5,  true]

alert(lista)

/*exibir elementos da lista percorrendo com laço de repetição e inserindo os dados do html */
for(var i=0; i<lista.length; i++){
    document.write("<h2>"+lista[i]+"</h2>")
}

/*adicionar um elemento ao fim da lista */
lista.push(" 84500-000")
alert(lista)

/*remover o ultimo elemento da lista*/
lista.pop()
alert(lista)

/*remover o primeiro elemento da lista*/
lista.shift()
alert(lista)

/*adcionar item como primeiro elemento da lista*/
lista.unshift("Gervronésio")

alert(lista)   
