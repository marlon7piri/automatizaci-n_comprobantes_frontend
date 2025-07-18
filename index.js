document.addEventListener('DOMContentLoaded',()=>{

const formulario = document.getElementById('formulario')
const inputFile = document.getElementById('inputFile')
const boton = document.getElementById('boton')

boton.addEventListener('click',()=>{
inputFile.click()
})


formulario.addEventListener('submit',async(e)=>{
e.preventDefault()
const file = inputFile.files[0]

if(!file){
    alert("Necesita escoger un archivo")
    return
}

const formData = new FormData()
formData.append("file",file)

try {

    const res = await fetch(`https://automatizacion-comprobantes.onrender.com/subir-excel`,{
        method:"POST",
       
        body:formData
    })

    const data = await res.json()
    alert("Archivo enviado con exito")
    
} catch (error) {
    console.error('Error al enviar el archivo', error);
      alert('Hubo un error al enviar el archivo');
}



})

    

})


