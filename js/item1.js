var a=[4, 8, 3, 5, 9]/*criando um vetor já preenchido*/

/*exibindo o array de inteiros*/
alert(a)

/*exibindo um elemento do array*/
alert(a[4])

/*alterar um valor*/
a[0]=7
alert(a)

/*Percorendo o vetor usando laço*/
for(var i=0; i<a.length; i++){
    document.write("<h2>"+a[i]+ "</h2>")
}
