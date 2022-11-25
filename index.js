const numero = () => {
    let numeroRandom = Math.random() * 10;
    document.querySelector("#escusas1").innerHTML = numeroRandom
    
}
numero()

let generadorEscusas = () => {
    let pronombre = ["Un","El" ];
    let sujeto = ["perro","abuelo","auto","terremoto"];
    let accion =["destrozo","destruyo","mancho"];
    let cosas = ["mi tarea"," mi mochila","mi camisa","mi zapato","mi auto"];
    let donde =["en mi casa","en la escuela","en la tina","en la calle"];

    let proN = Math.floor(Math.random() * pronombre.length);
    let suJ = Math.floor(Math.random() * sujeto.length)
    let accI = Math.floor(Math.random() * accion.length);
    let cosA = Math.floor(Math.random() * cosas.length);
    let donD = Math.floor(Math.random() * donde.length);
    

    return pronombre[proN]+" "+sujeto[suJ]+" "+accion[accI]+" "+cosas[cosA]+" "+donde[donD]

}

document.querySelector("#escusas1").innerHTML = generadorEscusas()

