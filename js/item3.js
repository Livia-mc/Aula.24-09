var frutas=[], f

frutas[0]=alert(prompt("Digite a primeira fruta: "))

do{
    f=prompt("Digite a fruta: ")
    frutas.push(f)
    if(f==""){
    alert("Digite algo ")
}
}
while(f!=null)

for(var i=0; i<frutas.length-1; i++){
    document.write("<h2>"+frutas[i]+"</h2>")


}