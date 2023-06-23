import React from "react";
import { Link } from "react-router-dom";
function HomePage({userList}) {
  console.log(userList);
  return (
    <>
      <div className="container-fluid p-2 bg-success text-white " id="adduser">
        <div className="row">
    <div className="col col-sm-4 text-dark h4  " >Welcome to Users </div>
          <div className="col col-sm-3 btn-group ">
        
            <Link to="/adduser" className="btn btn-light text-center ">
              AddUser
            </Link>
           
            <Link to="/userlists" className="btn btn-dark">
              userList
            </Link>
          </div>
        </div>
      </div>
 
      <div className="container">
        <div className="row">
          <div className="col text-align-center m-5 ">

          {userList.map((user,index)=><div key={index} className="row text-start"  >

    <h4 className="text-center">Name:{user.name}</h4>
    <hr></hr>
    <h4 className="text-center">Email:{user.email}</h4>
    <hr></hr>
    <h4 className="text-center">Password:{user.password}</h4>
    <hr></hr>
    <h4 className="text-center">Address:{user.address}</h4> 
<hr className="text-dark border-5 border-primary"></hr>

</div>)}

</div>
      
        </div>
      </div>
    </>
  );
}

export default HomePage;