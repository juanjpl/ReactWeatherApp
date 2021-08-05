import React from 'react'
import {Link} from 'react-router-dom' 

const NotFoundPage = props => {
    return (
        <div>
              Not Found
                       <div>
                            <Link to="/main">Volver a Main</Link> 
                        </div>
        </div>
    )
}



export default NotFoundPage
