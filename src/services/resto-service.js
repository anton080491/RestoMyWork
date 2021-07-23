export default class RestoService {
    url = 'http://localhost:3000';

    getResource = async (url) =>{
        const response = await fetch (`${this.url}${url}`);
        if (!response.ok){
            throw new Error ('Server Error');
        }

        return await response.json();
    }

    getMenuItems = async ()=>{
        return await this.getResource(`/menu/`);
    }



    setOrder = async (obj)=>{
        const response = await fetch(`${this.url}/orders`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }
    
}