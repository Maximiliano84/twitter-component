import React from 'react'

const TwitterFollowCard = ( {name, userName, isFollowing, formatUserName} ) => {
    console.log(isFollowing)
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
    <img className='tw-followCard-avatar' alt="avatar" src={`https://unavatar.io/${userName}`} />
    <div className='tw-followCard-info'>
        <strong>${name}</strong>
        <span className='tw-followCard-userName'>{formatUserName(userName)} </span>
    </div>
    </header>

    <aside>
        <button className='tw-followCard-button'>
            Seguir
        </button>
    </aside>
</article>
  )
}

export default TwitterFollowCard