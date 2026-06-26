import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { useState } from 'react'

function Customize2() {
    const {userData} = useContext(userDataContext)
    const [assistantName,setAssistantNameame] = useState(userData?.AssistantName || "")
    return(
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
      <h1 className='text-white mb-[40px] text-[30px] text-center'>Enter your <span className='text-blue-200'>Assistant Name</span></h1>
      <input type="text" placeholder="E.g. Thomas" className="w-full max-w-[600px] h-[60px] border-2 border-white bg-transparent  text-white placeholder-gray-300 outline-none px-[20px] py-[10px] rounded-full text-[18px]" required onChange={(e)=>setAssistantNameame(e.target.value)} value={assistantName} />
      {assistantName && <button className="min-w-[300px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer" onClick={()=>navigate("/customize2")}>Next</button>}
    </div>
  )
}

export default Customize2
