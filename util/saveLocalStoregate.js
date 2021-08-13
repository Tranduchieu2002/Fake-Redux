
const keysLocal =  "WORKS"
export default {
   get(){
      return JSON.parse(localStorage.getItem(keysLocal)) ?? []
   },
   set(todos){
      return localStorage.setItem(keysLocal,JSON.stringify(todos))
   }
}