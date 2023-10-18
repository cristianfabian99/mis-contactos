let lista_contacto =[];

function contacto (id,nombre,apellido,edad,email,telefono,cuidad,direccion){
    this.id = id,
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.email = email,
    this.telefono = telefono,
    this.ubicacion = {
        cuidad: cuidad,
       direccion: direccion
    }
    

}

let contacto1 = new contacto (0,'cristian','pajoy',21,'cpajoydiaz@gmail.com',3004578934,'cartagena', 'Olaya Herrera, sector puntilla')
lista_contacto.push(contacto1)


let contacto2 = new contacto (1,'kevin,gomez',30,'kevin1007@gmail.com',3014575934,'cartagena','Olaya Herrera, sector Playas Blancas')
lista_contacto.push(contacto2)


let contacto3 = new contacto (2,'maria','diaz',23,'diaz2002@gmail.com',3044578994,'cartagena','Olaya Herrera, sector stela')
lista_contacto.push(contacto3)

console.log(lista_contacto)


function borrarContacto() {
    const index = lista_contacto.indexOf
    if (index !== -1) {
        lista_contacto.splice(index, 1);
       
    } else {
        console.log("El contacto no existe en la lista");
    }
  }
 
  borrarContacto();
  console.log(lista_contacto)
 
  