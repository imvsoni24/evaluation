import React from 'react'
import Image from 'next/image'

export default function Index({data}){
  const handleClick1 = ()=>{
      window.open("https://drive.google.com/file/d/1Is4NFOIM0cyZHtIuye69FauFuGpzn48X/view?usp=share_link")
  }
  const handleClick2=()=>{
    window.open("https://github.com/imvsoni24")
  }
  const handleClick3=()=>{
    window.open("https://github.com/imvsoni24")
  }
  console.log(data)
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"lightblue"}}>
      <div>
      <Image style={{borderRadious:"50%"}} width={"250"} height={"250"} src={data.avatar_url} alt="hello"/>
      <h2 style={{textAlign:"center",color:"teal"}}>{data.name}</h2>
      <h4 style={{textAlign:"center",color:"teal",cursor:"pointer"}} onClick={handleClick3}>{data.login}</h4>
      <h2 style={{color:"teal"}}>{data.bio}</h2>
      <div style={{marginTop:"20px"}}>
        <button style={{cursor:"pointer",backgroundColor:"teal",color:"white",padding:"10px"}} onClick={handleClick1}>Resume</button>
        <button style={{cursor:"pointer",backgroundColor:"teal",color:"white",padding:"10px",marginLeft:"100px"}} onClick={handleClick2}>Follow</button>
      </div>
      <div style={{textAlign:"center",color:"teal"}}>
        <h1 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>Tech Stack</h1>
        <span>HTML</span><br /><span>CSS</span><br /><span>JavaScript</span><br /><span>React JS</span><br /><span>Next JS</span><br /><span>Redux</span><br /><span>Chakra UI</span>
      </div>
    </div>
    <div>
    <h1 style={{color:"Teal",fontSize:"30px",textAlign:"black",}}>EDUCATION</h1>
       <div style={{color:"Teal",fontSize:"30px",textAlign:"center",border:"1px solid teal"}}><h2>Full Stack Web Development (Full Time)</h2>
      <h3 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>Masai School</h3>
      <p>07/2022 – present</p></div>
      <div style={{border:"1px solid black"}}>
      <h2 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>BSc In Computer Application</h2>
<h3 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>CSJM University</h3>
<p style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>08/2017 – 02/2021 | Kanpur, India</p>
      </div>
      <div style={{border:"1px solid black"}}>
      <h2 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>Intermediate</h2>
<h3 style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>UP Board</h3>
<p style={{color:"Teal",fontSize:"30px",textAlign:"center"}}>07/2016 – 04/2017 | Kanpur, India</p>
      </div>
    </div>
    </div>
  )
}

export async function getStaticProps(){
  let res =await fetch("https://api.github.com/users/imvsoni24")
  res = await res.json()
  return {
    props:{
      data:res
    }
  }
}

