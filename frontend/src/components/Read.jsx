// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Read = () => {
//   const [data, setdata] = useState([]);
//   const [error, setError] = useState();

//   const navigate = useNavigate();


//   async function handleDelete(id){
//     const response = await fetch(`http://localhost:5500/api/v1/user/${id}`,{
//       method:"DELETE",
//     });

//     const result = await response.json();
//     if(!response.ok){
//       setError(result.error);
//     }

//     if(response.ok){
//       console.log("Deleted",response.ok);
//       setError("Deleted Succesfully");
//       setTimeout(()=>{
//         setError("");
//         getData();
//       },1000);
//     }



//   }






//   async function getData() {
//     const response = await fetch("http://localhost:5500/api/v1/user/alluser");
//     const result = await response.json();
//     console.log("result",result);

//     if(!response.ok){
//         setError(result.error);
//     }
//     if(response.ok){
//         console.log(response.ok);
//         if (Array.isArray(result.user)) {
//             setdata(result.user); // Adjust to match the nested 'user' key
//           } else {
//             setError("Unexpected data format");
//             console.log("Unexpected data format:", result);
//           }
       
//     }
//   }

//   useEffect(()=>{
//     getData();
//   },[]);





//   return (
//     <div className="m-4 p-4" style={{backgroundColor:"#e5f6f4",minHeight: "100vh",}}>
//       <div className="container">
//       {error && <div className="alert alert-danger">{error}</div>}
//       <div className="row">
//         {data?.map((ele) => (
//           <div key={ele._id} className="col-3 mb-3">
//             <div className="card card-shadow" style={{backgroundColor:"#9bc5c1"}}>
//                 <div className="card-body">
//                     <h5 className="card-title mb-3 " style={{color:"black"}}>
//                         {ele.title}
//                     </h5>
//                     <h6 className="card-subtitle mb-2 text-muted">
//                         {ele.description}
//                     </h6>
//                     <p className="card-text">
//                         {ele.name}
//                     </p>
//                     <span className="btn card-link" style={{backgroundColor:"#0f6467",color:"white"}} onClick={()=>navigate(`/${ele._id}`)}>
//                         Edit
//                     </span>
//                     <span className="btn card-link" style={{backgroundColor:"#67670f",color:"white"}} onClick={()=>handleDelete(ele._id)}>
//                         Delete
//                     </span>

//                 </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     </div>
    
//   );
// };

// export default Read;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const navigate = useNavigate();

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:5500/api/v1/user/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log("Deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch("http://localhost:5500/api/v1/user/alluser");
    const result = await response.json();
    console.log("result", result);

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      console.log(response.ok);
      if (Array.isArray(result.user)) {
        setData(result.user); // Adjust to match the nested 'user' key
      } else {
        setError("Unexpected data format");
        console.log("Unexpected data format:", result);
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-4 p-4" style={{ backgroundColor: "#e5f6f4", minHeight: "100vh" }}>
      <div className="container">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {data?.map((ele) => (
            <div key={ele._id} className="col-12 mb-3">
              <div className="card card-shadow" style={{ backgroundColor: "#9bc5c1" }}>
                <div className="card-body">
                  <h5 className="card-title mb-3" style={{ color: "black" }}>
                    {ele.title}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {ele.description}
                  </h6>
                  <p className="card-text">
                    {ele.name}
                  </p>
                  <div className="d-flex justify-content-start">
                    <span className="btn me-5" style={{ backgroundColor: "#0f6467", color: "white" }} onClick={() => navigate(`/${ele._id}`)}>
                      Edit
                    </span>
                    <span className="btn" style={{ backgroundColor: "#67670f", color: "white" }} onClick={() => handleDelete(ele._id)}>
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
