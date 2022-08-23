import React, { useState } from "react";


function Validation(){
    const[name,setName]=useState("")
    const[email,setemail]=useState("")
    const[pass1,setPass1]=useState("")
    const[pass2,setPass2]=useState("")

    function nameHandler(e){
        setName(e.target.value)
    }
    console.log(name)
    function emailHandler(e){
        setemail(e.target.value)
    }
    function pass1Handler(e){
        setPass1(e.target.value)
    }
    function pass2Handler(e){
        setPass2(e.target.value)
    }

    function submitHandler(){
        let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        for(let i=0;i<=nums.length;i++){
            if(name.includes(nums[i])){
                document.getElementById("name").style.display="block";
                document.getElementById("name").style.color="red";
                break
            }else if(name==""){
                document.getElementById("name").style.display="block";
                document.getElementById("name").style.color="red";
            }
            else{
                document.getElementById("name").style.display="none";

            }
        }
        if(email.includes!="@gmail.com"){
            document.getElementById("email").style.display="block";
            document.getElementById("email").style.color="red";
        }else{
            document.getElementById("email").style.display="none";

        }

        if(pass1!==pass2){
            document.getElementById("pass2").style.display="block";
            document.getElementById("pass2").style.color="red";
        }else{
            document.getElementById("pass2").style.display="none";
        }

        if(pass1==""){
            document.getElementById("pass1").style.display="block";
            document.getElementById("pass1").style.color="red";
        }else{
            document.getElementById("pass1").style.display="none";
        }

    }
        

    return(
        <>
        <h1>Validation</h1>
        <label>Name:
            <input type="text" value={name} onChange={nameHandler} ></input>
            <p style={{display:"none"}} id="name">please enter valid name</p><br/>
        </label>
        <label>email:
            <input type="text" value={email} onChange={emailHandler} ></input>
            <p style={{display:"none"}} id="email">please enter valid email</p><br/>
        </label>
        <label>password:
            <input type="password" value={pass1} onChange={pass1Handler} ></input>
            <p style={{display:"none"}} id="pass1">please enter valid password</p><br/>
        </label>
        <label>conform-password:
            <input type="password" value={pass2} onChange={pass2Handler} ></input>
            <p style={{display:"none"}} id="pass2">password not match</p><br/>
        </label>
            <button onClick={submitHandler}>submit</button>
        </>
    )
}
export default Validation;































// import React, { useState } from 'react'

// export default function Signup() {
//     const [pass1, setPass1] = useState("")
//     const [pass2, setPass2] = useState("")
//     const [name, setName] = useState("")
//     const [num, setNum] = useState("")
//     const [email, setEmail] = useState("")



//     function nameHandler(e) {
//         setName(e.target.value)
//     }
//     function emailHandler(e) {
//         setEmail(e.target.value)
//     }
//     function pass1Handler(e) {
//         setPass1(e.target.value)
//     }
//     function pass2Handler(e) {
//         setPass2(e.target.value)
//     }
//     function mobiltHandler(e) {
//         setNum(e.target.value)
//     }
//     function submitHandler() {
//         let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//         let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//         debugger
//         // for username
//         for (let i = 0; i < nums.length; i++) {
//             if (name.includes(nums[i])) {
//                 document.getElementById("name-error").style = "visibility:show";
//                 document.getElementById("name-error").style = "color:red";
//                 break
//             }
//             else {
//                 document.getElementById("name-error").style = "visibility:hidden";
//             }
//         }

//         // if (name.includes('1') || (name.includes('2')) || (name.includes('3')) || (name.includes('4')) || (name.includes('5')) || (name.includes('6')) || (name.includes('7')) || (name.includes('8')) || (name.includes('9')) || (name.includes('0'))) {
//         //     document.getElementById("error1").style = "visibility:show";
//         //     document.getElementById("error1").style = "color:red";
//         // }
//         // else {
//         //     document.getElementById("error1").style = "visibility:hidden";
//         // }

//         // for numbers
//         for (let i = 0; i <= alpha.length; i++) {
//             if (num.includes(alpha[i])) {
//                 document.getElementById("numerror").style = "visibility:show";
//                 document.getElementById("numerror").style = "color:red";
//                 break
//             }
//             else {
//                 document.getElementById("numerror").style = "visibility:hidden";
//             }
//         }
//         // for email
//         if (email.includes("@")) {
//             document.getElementById("emailerror").style = "visibility:hidden"

//         }
//         else {
//             document.getElementById("emailerror").style = "visibility:show";
//             document.getElementById("emailerror").style = "color:red";

//         }
//         // for password
//         if (pass1 !== pass2) {
//             document.getElementById("error").style = "visibility:show";
//             document.getElementById("error").style = "color:red";
//         }
//         else {
//             document.getElementById("error").style = "visibility:hidden";
//         }

//         // for mobile
//         //       if(num.includes('a')||num.includes('b')||num.includes('c')||num.includes('d')||num.includes('e')||num.includes('f')||num.includes('g')||num.includes('h')||num.includes('i')||num.includes('j')||num.includes('k')||num.includes('l')||num.includes('m')||num.includes('n')||num.includes('o')||num.includes('p')||num.includes('q')||num.includes('r')||num.includes('s')||num.includes('t')||num.includes('u')||num.includes('v')||num.includes('w')||num.includes('x')||num.includes('y')||num.includes('z'))
//         //     {
//         //         document.getElementById("numerror").style="visibility:show";
//         //         document.getElementById("numerror").style="color:red";   
//         //     }
//         // else{
//         //     document.getElementById("numerror").style="visibility:hidden";
//         // }
//     }
//     return (
//         <div className='text-center mt-5 form'>
//             <h5>SignUp</h5>
//             <input type="text" value={name} onChange={nameHandler} placeholder="enter your name" className=""></input><br />
//             <p id='name-error' style={{ visibility: "hidden", color: "red" }}>invalide username</p>

//             <input type="email" value={email} onChange={emailHandler} placeholder="enter your mail"></input><br />
//             <p id='emailerror' style={{ visibility: "hidden", color: "red" }}>invalide email</p>

//             <input type="text" value={num} onChange={mobiltHandler} placeholder="enter your number" className=''></input><br />
//             <p id='numerror' style={{ visibility: "hidden", color: "red" }}>please put only numbers</p>

//             <input type="password" value={pass1} onChange={pass1Handler} placeholder='Enter your Password' className=''></input><br />

//             <input type="password" value={pass2} onChange={pass2Handler} placeholder='Enter conform Password' className='mt-5'></input><br />
//             <p id='error' style={{ visibility: "hidden", color: "red" }}>password not matched</p>

//             <button className='btn btn-success mt-3' onClick={submitHandler}>SignUp</button>
//         </div>
//     )
// }