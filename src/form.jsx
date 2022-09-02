import React, { useState } from "react";
import {app,database} from "./firebaseConfig";
import {collection,addDoc,getDocs} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, reload } from "firebase/auth";
import Time from "./time"
const arr=[]
const arr2=[]

var fix=0
function gettime(){
  var y=0;
  const str=Time()
  return str.substring(0,21)
  }
function val(){
    return arr
  }
  function val2(){
    return arr2
  }
function Form() {
  const [email_, setemail] = useState("");
  const [password_, setpass] = useState("");
  const collectionRef=collection(database,'users')
  let auth = getAuth();
  function helper1(event) {
    setemail(event.target.value);
  }
  function helper2(event) {
    setpass(event.target.value);
  }
  function final() {
    document.getElementById("data").innerHTML+="<p>"+email_+"<span class='time'>"+"  "+"["+gettime()+"<span>"+"]"+"<br>"+"</p>"
    console.log("S");
      addDoc(collectionRef,{
        task:email_,
        time:gettime(),
      })
    .then((response) => {
        console.log('data added');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
const getdata =()=>{
getDocs(collectionRef).then((response)=> {

  response.docs.map((item)=>{
document.getElementById('data').innerHTML+="<p>"+({...item.data()}.task)+"<span class='time'>"+"  "+"["+({...item.data()}.time)+"<span>"+"]"+"<br>"+"</p>"
})
});
console.log(arr)
val(arr)
val2(arr2)
};
{fix==0 && getdata()}
fix+=1
function getarr(data){
    console.log("i am here")
    return  <div className=" col col-lg-3 col-6">
                {data}
              </div>
}
  return (
    <div className="form">
      <center>
      <h1 class="heading">To-Do List</h1>
        <input
        className="input"
          type="text"
          onChange={helper1}
          placeholder="Task Here"
        ></input>
        <br></br>
        <br></br> <button className="btn btn-primary" onClick={final}>submit</button>
      </center>
      <br>
      </br>
      <div className="container row">
                
    
        </div>

    </div>
  );
}
export default Form
export {arr,arr2}




































// sdsdskdsnknskdsldsdld,sdsdsdsmdsdsdsd