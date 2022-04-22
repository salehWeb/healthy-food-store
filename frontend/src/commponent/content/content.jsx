import React, { useEffect } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, getCartWith_ID } from '../../action/Cart'
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

  let keys = [];

  const key = dataCart?.filter((cart) => cart !== null)
  for (let i = 0; i < key?.length; i++) {
    let fucker = firstReducer?.find((item) => item._id === key[i].key)
    keys.push(fucker)
  }

  console.log(key)

  keys = keys.map((item) => item)
  console.log(keys);

  return (
    <>
      {keys?.map((item) => (
        <>
          <img src={item.img} alt={item.name} />
          <Typography variant='h5'>{item.name}</Typography>
          <Typography variant='body2'>{item.dsc}</Typography>
        </>
      ))}
      {key?.map((item) => (
        <>
          <Typography variant='h5'>{item.bases}</Typography>
          <Typography variant='body2'>{item.prisyes}</Typography>
        </>
      ))}
    </>
  )
}

export default About