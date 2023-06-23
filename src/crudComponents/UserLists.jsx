import React from "react";
import { Link } from "react-router-dom";

function UserLists({userList,DeleteUser,EditUser}) {
  return (
    <>
      <div className="container-fluid p-2 bg-success text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-dark">
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
            <div className="col">
{userList.map((user,index)=><div key={index} className="row">
<div className="col text-start">
<h6>Name: {user.name}</h6>
<hr></hr>
    <h6>Email: {user.email}</h6>
    <hr></hr>
    <h6>Password: {user.password}</h6>
    <hr></hr>
    <h6>Address: {user.address}</h6> 
   <hr className="border-5 border-primary"></hr>
</div>

<div className="col my-auto">
    <div className=" ">
    <button className="btn btn-warning" onClick={()=>EditUser(user,index)}>Editing</button>
    <br></br>
    <br></br>
<button className="btn btn-danger" onClick={()=>DeleteUser(index)}>Delete</button>
    </div>

</div>

</div>)}
<hr></hr>
            </div>
        </div>

      </div>
    </>)
}
export default UserLists;