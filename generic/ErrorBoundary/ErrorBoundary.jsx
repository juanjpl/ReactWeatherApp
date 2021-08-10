import React , {Component} from 'react' 

class ErrorBoundary extends React.Component {

    constructor(props){
        super(props)

            this.state = {
               hasError:false
            }

    } 

/*
    estaActivo = () =>{
        return this.props.activo ? "Activo" : "No activo"
    }

    onClickHandler = () =>{
        //this.state.activo =true ;
        this.setState({activo: true})
    }


componentDidMount{
    console.log("El componente se ha montado")
}

componentDidUpdate (prevProps, prevState){
    console.log("Estado previo: " ,prevState.activo )
    console.log("Estado previo: " ,this.state.activo )
    console.log("El componente se ha actualizado")
}

componentWillUnMount(){
    console.log("El componente se ha des-montado")

}
*/

static getDerivedStateFromError(error){
    //this.setState({hasError: true})
    return{hasError:true}
}

componentDidCatch(error, errorInfo){
    console.log("ErrorInfo", errorInfo)
}
    render() {
        return (
            this.state.hasError ?
            (<h1>Hubo un error</h1>)
            :
            (this.props.children)
            /*
            <div>
            <button conClick={this.onClickHandler}>Activar</button>


        <h1>
        ErrorBoundary {this.props.saludo}

        {
            this.estaActivo()
        }
        </h1>
        </div>
        */
        
        )
    }
}

export default ErrorBoundary