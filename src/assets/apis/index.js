import axios from "axios"

export function getProduct(){
    return new Promise((resolve,reject)=>{
        axios.get("/product").then(result=>{
            resolve(result.data)
        })
    })
}