import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from "react-router-dom"

const Update = () => {

  const [error,setError] = useState("");
  const [name,setName] = useState("");
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");


  const navigate = useNavigate();
  const {id} = useParams();


  //receiving single data
  const getSingleData = async()=>{
    const response = await fetch(`https://blogapp-m2nv.onrender.com/api/v1/user/${id}`);
    const result = await response.json();

    if(response.ok){
      setTitle(result.title);
      setDescription(result.description);
      setName(result.name);
    }
  };


//passing edited data to backend


  async function handleUpdate(e){
    e.preventDefault();

    const updatedUser = {name,title,description};
    console.log(updatedUser);
    
    const response = await fetch(`https://blogapp-m2nv.onrender.com/api/v1/user/update/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if(response.ok){
      console.log("Updated Result",result);
      setError("");
      navigate("/read");
      
    }

    if(!response.ok){
      console.log(response.error);
      setError(response.error);
    }

    

  };
  useEffect(()=>{
    getSingleData();
  },[]);



  return (
    <div className='container my-2'>
      <h1 className='h1 text-center'>
        Edit Data
      </h1>
      {error && <div className='alert alert-danger'>{error}</div>}
      <form className='form' onSubmit={handleUpdate}>
        <div className='mb-3'>
          <label className='form-label' >Title</label>
          <input type="text" className='form-control' value={title}  onChange={(e)=>setTitle(e.target.value)}/>

        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor="">Description</label> 
          <textarea className='form-control' rows={4} type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>


        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="">Author Name</label> 
          <input className='form-control' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>


        </div>

        <button className='btn btn-info' type='submit'>Update</button>



      </form>
     
    </div>
  );
}

export default Update;
