import {useRef, useEffect, useState} from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three' 

const useVanta = () =>{
    const myRefDiv =useRef(null)
    const [vanta, setVanta] = useState(0) //vanta va a ser inicializado

    //en la primera renderizacion es igual a "nulo", es el valor inicial
    //console.log("myRefDiv.current", myRefDiv.current)

    useEffect(()=>{
        //console.log("myRefDiv.current(en UseEffect", myRefDiv)

        if(!vanta) {

             //Activo el efecto  "clouds"
            setVanta( Clouds({
                THREE,
                el: myRefDiv.current
            }))
            //vanta !=0, es diferente de falso

           
           

            //console.log("establezco vanta a un valor diferente de 0")
        }

        //al salir de la pantalla debemos detenr el efecto
        //y des-asociar todos los recursos (div + vanta effect)

        return() => {
            //dentro de esta funcion se va a realizar la tarea
            //de destruir los recursos tomados por "vanta"

            if(vanta){
                vanta.destroy()
                //console.log("libero los recursos ")
            }
        }
    },[vanta]) //con esto me aseguro que siga funcionando bien 
    //si tuviera mas variables  "use"

    return myRefDiv

}

export default useVanta