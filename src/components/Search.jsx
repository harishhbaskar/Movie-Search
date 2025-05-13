//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTIyODNjMDNjM2U4MTc0NGQ1ODk2MmVmNDI1ZmQ3NyIsIm5iZiI6MTc0MDM1Njg3Ni4zOTEsInN1YiI6IjY3YmJiZDBjZDM2MzE2OTQ2NjQ2ODU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ehu1FonY_XajUEzlXTKV5ae9GrLZzYzidgHH5PBDShc

import React from 'react'

const Search = ({searchTerm , setSearchTerm}) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="searh-icon"/>

            <input
                type="text"
                placeholder="Search to thousands of movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search