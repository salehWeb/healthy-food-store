import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom';
import { Card, Grid, Typography, Paper, Select, Button, MenuItem, ButtonBase, ImageList, ImageListItemBar, ImageListItem, ListSubheader, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { PrasData } from '../../action/Cart'
import Swal from 'sweetalert2'


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
const Item = ({ item }) => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const [bases, setbases] = useState(1)
    const howMushYouWant = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const classes = useStyles()

    const handelAddToCart = () => {
        const prisyes = bases * item.pricey
        const key = item._id
        localStorage.setItem(`${item._id}`, JSON.stringify({ bases, prisyes, key }))
        return (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: true,
            })
        )
    }
    const { data } = useSelector((state) => state)
    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <>
            <Paper elevation={6} className={classes.con} key={item._id}>
                <Card>
                    <img src={item.img} alt={item.name} className={classes.img} />
                </Card>
                <Typography variant='h6' className={classes.blok}>
                    {item.name}
                </Typography>
                <Grid className={classes.justfi}>
                    <Select
                        key={item._id}
                        value={bases}
                        onChange={(e) => setbases(e.target.value)}
                    >
                        {howMushYouWant.map((x, i) => {
                            return <MenuItem key={i} value={1 + i}>{1 + i}</MenuItem>
                        })}

                    </Select>
                    <Button onClick={handelAddToCart} size="small" className={classes.btn}>
                        Add
                    </Button>
                    <Typography variant='h6'>
                        $:{item.pricey * bases}
                    </Typography>
                </Grid>
            </Paper>
        </>
    )
}

export default Item