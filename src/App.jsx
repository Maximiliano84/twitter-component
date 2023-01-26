import React from 'react'
import "./App.css"
import TwitterFollowCard from './TwitterFollowCard'

const App = () => {
   const formatUserName =(userName) => `@${userName}`
  return (
     <section className='App'>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="jcresler" name="John Cresler"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="abirmingham" name="Aaron birmingham "/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="mcass" name="Maxi Cassino"/>
     </section>
  )
}

export default App