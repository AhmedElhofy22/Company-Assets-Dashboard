import React from 'react'

const Loading = ({loading,error,children}) => {
  return (
    <div>
     {loading ? (
          <h1 style={{color:'grey'}}>Loading...</h1>
      ) : error ?  (
          <p style={{color:'red'}} colSpan={3}>{error}</p>
        ) : (
        children
      )}
    </div>
  )
}

export default Loading
