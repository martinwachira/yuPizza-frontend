export function PostCustomerData(type, userData) {  

    const header = new Headers();
    header.append('Access-Control-Allow-Origin', '*');
    let BaseURL = 'https://ypizza.herokuapp.com/api/';

    return new Promise((resolve, reject) =>{   
         
        fetch(BaseURL+type, header, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}