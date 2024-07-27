import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[title,setTitle]=useState("");
    const[error,setError]=useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        var addUser = {title,name,description};
        console.log(addUser);


        const response = await fetch("http://localhost:5500/api/v1/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(addUser),
        });
        const result = await response.json();

        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }

        if(response.ok){
            console.log(result);
            setName("");
            setDescription("");
            setTitle("");
            setError("");
            navigate("/read");
            
        }
    };


  return (
    <div className='container my-2'>
        <h1 className='h1 text-center'>fill the Blog Data</h1>
        {error && <div className='alert alert-danger'>{error} </div>}
        <form className='form' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>title</label>
                <input className='form-control' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>


            </div>
            <div className='mb-3'>
                <label className='form-label'>description</label>
                <textarea className='form-control' rows={5} type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>

            </div>
            <div className='mb-3'>
                <label className='form-label'>Author Name</label>
                <input className='form-control' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            </div> 
            

            <button className='btn btn-primary' type='Submit'>
                Submit
            </button>

        </form>
      
    </div>
  );
}

export default Create;
