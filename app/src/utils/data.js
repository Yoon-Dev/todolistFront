export const signal = new AbortController();

// fetch data
export const fetchData = (url, signal) => {
    
    let data =  fetch(url)
                    .then( res => {
                        return res.json()
                    }) 
                    .then( res => {
                        return res
                    })
                    .catch(error => {
                        alert(error)
                })
    return data;
} 

// export const postData = async (url, data) => {
//     // const rawResponse = await fetch(url, {
//     //     method: 'POST',
//     //     headers: {
//     //       'Accept': 'application/json',
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: `name=${data.name}&detail=${data.detail}&date=${data.date}&label=${data.label}`
//     //   });
//     //   const content = await rawResponse.json();
      
//     //   console.log(content, `name=${data.name}&detail=${data.detail}&date=${data.date}&label=${data.label}`)
//     //   return content;

// }
export const postTodoData = (url, value) => {
    
    var formdata = new FormData();
    formdata.append("name", value.name);
    formdata.append("detail", value.detail);
    formdata.append("date", value.date);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
          if(result !== 'true'){
              alert(`Il y a eu un problème, désolé :( ${result}`)
          }
        })
      .catch(error => alert(`Il y a eu un problème, désolé :( ${error}`));

}

export const delTodo = (url, id) => {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch(`${url}/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      if(result !== 'true'){
          alert(`Il y a eu un problème, désolé :( ${result}`)
      }
    })
    .catch(error => alert(`Il y a eu un problème, désolé :( ${error}`));
}

export const editTodo = (url, data, id) => {
  
  var formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("detail", data.detail);
  formdata.append("date", data.date);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(`${url}/${parseInt(id)}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      if(result !== 'true'){
          alert(`Il y a eu un problème, désolé :( ${result}`)
      }
    })
    .catch(error => alert(`Il y a eu un problème, désolé :( ${error}`));
} 