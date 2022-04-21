import React, { useEffect, useState } from 'react'
import { Card, Grid, Typography, Paper, Select, Button, MenuItem, ButtonBase, ImageList, ImageListItemBar, ImageListItem, ListSubheader, CircularProgress } from '@material-ui/core';
import { getPost } from '../../action/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Item from './Item'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '9rem'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  img: {
    float: 'left',
    width: '180px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  con: {
    margin: ' 10px 30px '
  },
  blok: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
  },
  justfi: {
    display: 'flex',
    padding: '5px',
    justifyContent: 'space-between'
  },
  btn: {
    backgroundColor: '#777'
  }
}))

const Topics = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost())
  }, [])
  const { firstReducer } = useSelector((state) => state)
  return (
    <>
      <div className={classes.root}>
        <Grid className={classes.grid}>
          {!firstReducer ? (<CircularProgress className={classes.blok} />) : firstReducer.map((item) => (
            <Item item={item} key={item._id} />
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Topics