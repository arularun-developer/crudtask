import React,{useState} from 'react'
import{Route,Routes,useNavigate} from 'react-router-dom';
import LandingPage from './crudComponents/LandingPage';
import HomePage from './crudComponents/HomePage';
import UserLists from './crudComponents/UserLists';
import AddUser from './crudComponents/AddUser';


function App() {
  const navigate =useNavigate()

  const user=[{
     Name:'Rocky',
     Email:'1234@gmail.com',
     Password:'78945656',
     Address:'12street chennai'
  }];


  const [userList,setUserList]=useState([...user])
  const [currentUser,setCurrentUser]=useState()
  const [index,setIndex]=useState()  

   const EditUser = (user,index)=>{
  setCurrentUser(user)
  setIndex(index)
  console.log(user);
  navigate('/adduser')

}

const UpdateUser=(updatedUser,id)=>{
  console.log(updatedUser);
  const UserList = [...userList]
  console.log(id);
  UserList[id] ={...updatedUser}
   setUserList([...UserList])

};
  const Adduser=(user)=>{
    setUserList([...userList,user])
    console.log(userList);
  };
  const DeleteUser=(id)=>{
   const UserList = [...userList]
    const newUser=UserList.filter((user,index)=>index!==id)
    setUserList(newUser)

  };

  return (
    <div className='App'>
       
        <Routes> 
       
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/home" element={<HomePage userList={userList} />}/>
       <Route path="/adduser" element={<AddUser currentUser={currentUser} index={index} UpdateUser={UpdateUser} Adduser={Adduser}/>}/>
       <Route path="/userlists" element={<UserLists EditUser={EditUser} userList={userList} index DeleteUser={DeleteUser} />}/>
       </Routes>
 
 



        
      
    </div>
  )
}

export default App;
