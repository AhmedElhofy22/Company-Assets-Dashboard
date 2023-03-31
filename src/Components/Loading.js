import React from 'react'

const Loading = ({loading,error,children}) => {
  return (
    <div>
     {loading ? (
          <h1>Loading...</h1>
      ) : error ?  (
          <p colSpan={3}>{error}</p>
        ) : (
        children
      )}
    </div>
  )
}

export default Loading
