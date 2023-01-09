import React from 'react'
import Link from 'next/link'

const project = ({data}) => {
    console.log(data)
  return (
    <div style={{backgroundColor:"#2d3748",color:"white"}}>
        <h1 style={{textAlign:"center"}}>Projects</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",textAlign:"center"}}>
            {data.map((repo)=>(<>
              <Link key={repo.id} href={repo.clone_url}>
              <div style={{border:"1px solid black"}}> <h2>{repo.name}</h2>
                 <h2>Forks: {repo.forks_count}</h2>
                 <h2>Star: {repo.stargazers_count}</h2>
                <h2>Language: {repo.language}</h2></div>
              </Link>
            </>))}
        </div>

    </div>
  )
}

export default project

export async function getServerSideProps(){
  let res =await fetch("https://api.github.com/search/repositories?q=user:imvsoni24+fork:true&sort=updated&per_page=10&type=Repositories")
  res = await res.json()
  res = res.items
  return {
    props:{
      data:res
    }
  }
}