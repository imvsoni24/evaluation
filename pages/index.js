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
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px"}}>
      <div>
      <Image width={"250"} height={"250"} src={data.avatar_url} alt="hello"/>
      <h2>{data.name}</h2>
      <h4 onClick={handleClick3} style={{cursor:"pointer"}}>{data.login}</h4>
      <h2>{data.bio}</h2>
      <div>
        <button style={{cursor:"pointer"}} onClick={handleClick1}>Resume</button>
        <button style={{cursor:"pointer"}} onClick={handleClick2}>Follow</button>
      </div>
      <div>
        <h1>Tech Stack</h1>
        <span>HTML</span><br /><span>CSS</span><br /><span>JavaScript</span><br /><span>React JS</span><br /><span>Next JS</span><br /><span>Redux</span><br /><span>Chakra UI</span>
      </div>
    </div>
    <div>
    <h1>EDUCATION</h1>
       <div><h2>Full Stack Web Development (Full Time)</h2>
      <h3>Masai School</h3>
      <p>07/2022 – present</p></div>
      <div>
      <h2>BSc In Computer Application</h2>
<h3>CSJM University</h3>
<p>08/2017 – 02/2021 | Kanpur, India</p>
      </div>
      <div>
      <h2>Intermediate</h2>
<h3>UP Board</h3>
<p>07/2016 – 04/2017 | Kanpur, India</p>
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

