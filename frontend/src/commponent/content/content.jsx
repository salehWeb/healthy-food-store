import React, {useEffect} from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import {getPost} from '../../action/Cart'
import { Card, Grid, Typography, Paper, Select, Button, MenuItem, ButtonBase, ImageList, ImageListItemBar, ImageListItem, ListSubheader, CircularProgress } from '@material-ui/core';


const About = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost())
  }, [])
  const { firstReducer } = useSelector((state) => state)

  const dataCart = firstReducer?.map((item) => (
    JSON.parse(localStorage.getItem(`${item._id}`))
  ))
const finly = dataCart?.filter((cart) => cart !== null)
  
console.log(finly);
  
  return (
    <>
    {firstReducer?.map((item) => (
      <Typography variant='h5'>{item.name}</Typography>
    ))}
    {finly?.map(({bases, prisyes}) => (
      <>
      <Typography variant='h5'>{bases}</Typography>
      <Typography variant='h5'>{prisyes}</Typography>
      
      </>
    ))}
    
    </>
  )
}

export default About