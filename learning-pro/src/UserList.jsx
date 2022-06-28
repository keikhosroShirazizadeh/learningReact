import { useState } from "react"

const UserList=()=>{
    let[users,setUsers]=useState(
        []
    )

    let [name,setName]=useState("")
    let [username,setUsername]=useState("")

   
    const handleSubmit=(e)=>
    {
        
       e.preventDefault()   
    //    let copy=[...users]
    //    copy.push({name:name,username:username})
       setUsers([...users,{name,username}])
       setName("")
       setUsername("")
    }

    return(<div>

        <form onSubmit={handleSubmit} >
            <input name="name" placeholder="name" onChange={e=>setName(e.target.value)} value={name}></input>
            <input name="username" placeholder="username" onChange={e=>setUsername(e.target.value)} value={username} ></input>
            <button  type="submit">add</button>
        </form>

        <table>
            <thead>
                <tr>
                    <td>row</td>
                    <td>name</td>   
                    <td>userName</td>
                </tr>
            </thead>
            <tbody>
                {users.map((item,index)=> 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </div>)
}

export default UserList