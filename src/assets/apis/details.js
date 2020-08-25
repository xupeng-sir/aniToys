import axios from "axios"
export function getDetailsByLid(lid){
    return new Promise(
        (resolve,reject)=>{
            axios.get("/detail",{
                params:{
                    lid //lid:lid
                }
            }).then(result=>{
                resolve(result.data);
            })
        }
    )
}