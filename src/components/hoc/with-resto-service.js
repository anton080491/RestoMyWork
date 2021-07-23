import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wraped) => {
    return (props) =>{
        return(
            <RestoServiceContext.Consumer>
                {
                    (RestoService)=>{
                        return <Wraped {...props} RestoService={RestoService} />
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;