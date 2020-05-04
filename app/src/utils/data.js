import { store } from "../storage/store";

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
          if(!result){
              alert(`Il y a eu un problème, désolé :(`)
          }else{
            store.dispatch({type : "CLEARRELOAD", data: {data: {id: parseInt(result),...value}}})
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
      }else{
        store.dispatch({type: "CLEARDEL", data: id})
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
      }else{
        store.dispatch({type : "CLEAREDIT", data: {id: id, ...data}})
      }
    })
    .catch(error => alert(`Il y a eu un problème, désolé :( ${error}`));
} 