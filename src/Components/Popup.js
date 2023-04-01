import React , {Fragment} from 'react'
import './Popup.css'

const PopUp = (props) => {
  return (
    <Fragment >
      <div className='backdrop' onClick={props.onClose}/>
      <dialog open className='popup'>{props.children}</dialog>
    </Fragment>
  )
}

export default PopUp