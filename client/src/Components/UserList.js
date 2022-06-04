 import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import Avatar from 'react-avatar';
 import {limitchange,userchange} from "../actions/index.js";
 
 import { useSelector, useDispatch }  from "react-redux";
 
 const App = () => {


  const [user, setData] = useState([]);
  const [totalcount, settotalcount] = useState(0);
  const [userlimit, setlimit] = useState(3);
  const [selectval, setselectval] = useState(3);

  const [selectarray, setselectarray] = useState([]);
  const [Load, setLoad] = useState(false);

  const [userid, setuserid] = useState("");
  const [userinput, setuserinput] = useState("");

  const [pagearray, setpagearray] = useState([]);
    
    

  
 
   function handleSelect(){
       var senddata ={size:document.getElementById("selectvalue").value}
    try{
      //alert(jsonauthdata);
        axios.post('http://localhost:5000/index/onlimit',  senddata , {
          headers:{'Content-Type': 'application/json','Accept': 'application/json'}
        })
          .then(res => {
             
            setData(res.data.msg);
            setselectval(document.getElementById("selectvalue").value);
            
          })
        }  catch(error) {
          
                console.log(error)
                alert(error);
                console.log("internal server error");
              }

  }
 
  
 
 
   const limitchangereducer_val = useSelector(state => state.limitchangereducer);
   

   const dispatch = useDispatch();
  useEffect(() => {
 
    const fetchData = async () => {
      setLoad(true);
      // console.log(Load);
      const res = await fetch(
        'http://localhost:5000/index/totalcount',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   userid: sessionStorage.getItem('userid'), // Use your own property name / key
        // }),
      }
      );
     const json = await res.json();
       console.log(json.msg);
       console.log(json.selectdata);
       settotalcount(json.msg);
       dispatch(limitchange(json.msg));
       console.log(limitchangereducer_val);
        setselectarray(json.selectdata);
        setpagearray(json.pagevalue);

  const res_user = await fetch(
    'http://localhost:5000/index/defaultlimit',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   userid: sessionStorage.getItem('userid'), // Use your own property name / key
    // }),
  }
  );
  const data = await res_user.json();
  console.log(data.msg);
  setData(data.msg)

    };
    fetchData();
  }, []);
  



 
   return (
     <div>
     <center>
   
     <div style={{align:"center"}} >
<table  className="table table-stripedr ">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Created at</th>
    <th scope="col">Updated At</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>
  {user.map(data=>(
      <tr>
      <th scope="row">    <Avatar name={data.name} maxInitials={1} size={30}/> {data.name}</th>
      <td>{data.email}</td>
      <td>{data.created_at}</td>
      <td>{data.updated_at}</td>
      <td><button className='btn btn-primary' onClick={()=>{var userName = prompt('Please Enter your Email') ;
      function isEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(val)){
          alert("invalid email");
        }else{

          var senddata ={email:userName,_id:data._id}
    try{
      //alert(jsonauthdata);
        axios.post('http://localhost:5000/index/update_email',  senddata , {
          headers:{'Content-Type': 'application/json','Accept': 'application/json'}
        })
          .then(res => {
             
            setData(res.data.msg)
            console.log(res.data.msg);
            // setselectval(document.getElementById("selectvalue").value);
            
          })
        }  catch(error) {
          
                console.log(error)
                alert(error);
                console.log("internal server error");
              } 
        }
    }
      
      
    isEmail(userName)}}> Show</button></td>
    </tr>

  ))}

</tbody>

 
</table>
1 to {selectval} of {totalcount} <select id="selectvalue" onChange={handleSelect}>
     {selectarray.map(data=>(
       <option value={data}>{data}</option>
     ))}
  
 
</select>



<div className='d-inline-block float-right'><ul className="pagination inline">
    <li className="page-item">
      <a className="page-link" id="prev" onClick={()=>{

var senddata={ id:"prev",length:totalcount}
axios.post('http://localhost:5000/index/pagination',  senddata , {
  headers:{'Content-Type': 'application/json','Accept': 'application/json'}
})
  .then(res => {
     
    setData(res.data.msg);

    
  })

    }} aria-label="Previous">
        <span aria-hidden="true">«</span>
      </a>
    </li>
    {pagearray.map(data=>(<li className="page-item"><a className="page-link" onClick={()=>{

var senddata={ id:data,length:totalcount}
axios.post('http://localhost:5000/index/pagination',  senddata , {
  headers:{'Content-Type': 'application/json','Accept': 'application/json'}
})
  .then(res => {
     
    setData(res.data.msg);

    
  })

    }} id={data}>{data}</a></li>))}
    
 
    <li className="page-item">
      <a className="page-link" id="next"  onClick={()=>{

var senddata={ id:"next",length:totalcount}
axios.post('http://localhost:5000/index/pagination',  senddata , {
  headers:{'Content-Type': 'application/json','Accept': 'application/json'}
})
  .then(res => {
     
    setData(res.data.msg);

    
  })

    }}aria-label="Next">
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul></div>
  



</div>

</center>


           </div>
        
     
   )
 }
 
 export default App








// import React, { Component } from 'react'
// import axios from 'axios';
// import { useSelector, useDispatch } from "react-redux";
// export class First extends Component {


//     state = {
//         Request: '',
     
//         Load:false,
//         progress:'',
//         res_data:''
     

//       }
//        changeTheNumber = useSelector(state => state.changeTheNumber);
  
//       const dispatch = useDispatch();
    

//       Requestinput = event => {
//         this.setState({ Request: event.target.value});

//       }
   
//       handleSubmit = event => {
        
//         event.preventDefault();
    
//         const user = {
//           Request: this.state.Request,
       
//         };
    
   
//           try{
//             //alert(jsonauthdata);
//               axios.post(`http://localhost:5000/admin/Insert`,  user, {
//                 headers:{'Content-Type': 'application/json','Accept': 'application/json',"Access-Control-Allow-Origin" :"*"}
            
                
//               })
              
    
//         .then(res => {
         
//           // console.log(res.status);
//           // console.log(res.data);
//           this.setState({
//             res_data:res.data
//           });
         
//            //this.setState({Request: ''});
    
//       })
//     }  catch(error) {
     
//             console.log(error)
//             this.setState({
//               Load :false,
//               });

//             console.log("internal server error");
//           }
    
    
//       }
//   render() {
//     return (
//    <div>
//        <center>
     
//        <div style={{align:"center"}} >
//  <table  className="table table-stripedr ">
//   <thead>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Created at</th>
//       <th scope="col">Updated At</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">Yuvraj</th>
//       <td>Mdfj</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//       <td>Show</td>
//     </tr>
//   </tbody>
// </table>

// </div>

// </center>
// </div>

//     )
//   }
// }

// export default First