import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown=
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />
      </div>
      <div className="userChat" >
          <img src="https://lh4.googleusercontent.com/-vkbgVhyq9Aw/AAAAAAAAAAI/AAAAAAAAAOw/3XLh_-xIIL4/photo.jpg?sz=64" alt="" />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
    </div>
  )
}

export default Search