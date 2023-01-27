import React from 'react'
import "./App.css"
import TwitterFollowCard from './TwitterFollowCard'

const users = [
   {
      userName: 'mcassino',
      name: 'Maxi Cassino',
      isFollowing: true
   },
   {
      userName: 'rdossantos',
      name: 'Romi Dos Santos',
      isFollowing: false
   },
   {
      userName: 'scass',
      name: 'Santi Cassino',
      isFollowing: true
   },
   {
      userName: 'valcassds',
      name: 'Valentino Cass',
      isFollowing: false
   }
]

const App = () => {
   
  return (
     <section className='App'>
        {users.map( user => {
         const {userName, name, isFollowing} = user
         return (
            <TwitterFollowCard 
            userName={userName}
            initialIsFollowing={isFollowing}
            name={name}
            key={userName} >
               
            </TwitterFollowCard>
         )
        })}
     </section>
  )
}

export default App