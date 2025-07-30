document.addEventListener('DOMContentLoaded',()=>{

const formulario = document.getElementById('formulario')
const inputFile = document.getElementById('inputFile')
const boton = document.getElementById('boton')
const loader = document.getElementById('loader')
const containerLoader = document.querySelector('.container_loader')

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
containerLoader.style.visibility = 'visible'
loader.style.visibility = 'visible' 
    const res = await fetch(`https://automatizacion-comprobantes.onrender.com/subir-excel`,{
        method:"POST",
       
        body:formData
    })

    const data = await res.json()
    alert("Archivo enviado con exito")
    containerLoader.style.visibility = 'hidden'
    loader.style.visibility = 'hidden'

} catch (error) {
    console.error('Error al enviar el archivo', error);
      alert('Hubo un error al enviar el archivo');
}



})

    

})


