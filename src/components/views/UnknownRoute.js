import React from 'react'
import { Link } from 'react-router-dom'
import sadFace from '../../static/sadeface.svg'
import { Button } from 'react-bootstrap'
import './UnknownRoute.css'

export const UnknownRoute = () => {
  return(
    <div className='centered'>
      <img src={sadFace} />
      <br />
      <br />
      <h3> Don't be sad but...</h3>
      <h4> you have found yourself in the world of the unknown. Please click the back button below.</h4>
      <Link to='/'><Button> Back </Button></Link>
    </div>
  )
}
