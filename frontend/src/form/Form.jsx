import React, { useState } from 'react'
import './index.css'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import { PostData } from '../action/Cart'
import { Typography, Grid, TextField, FormGroup, CardMedia, Card, Button, ButtonBase, Container, CardContent, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        maxWidth: '70%',
        minWidth: '40%',
        margin: 'auto',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));


const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const defaultVaule = { name: '', pricey: '', dsc: '', img: '' }
    const [form, setFormValue] = useState(defaultVaule)
    const isReady = form.name && form.img && form.pricey && form.dsc;
    const handelSubmit = () => {
        if (isReady) {
            dispatch(PostData(form))
            console.log('go to api');
            setFormValue(defaultVaule)
        }
    }
    return (



        <Paper elevation={10} className={classes.paper}>
            <form onSubmit={(e) => e.preventDefault()} className={classes.form} >

                <TextField value={form.name} onChange={(e) => setFormValue({ ...form, name: e.target.value })} type='text' fullWidth id="outlined-basic" label="type of food" variant="outlined" />

                <TextField value={form.dsc} onChange={(e) => setFormValue({ ...form, dsc: e.target.value })} type='text' fullWidth id="outlined-basic" label="descrabtion" variant="outlined" />

                <TextField value={form.pricey} onChange={(e) => setFormValue({ ...form, pricey: Number(e.target.value) })} type='number' fullWidth id="outlined-basic" label="pricy" variant="outlined" />


                <div className={classes.fileInput}>
                    <FileBase64 value={form.img} type='file' onDone={({ base64 }) => setFormValue({ ...form, img: base64 })} />
                </div>


                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' onClick={handelSubmit}>submit</Button>

            </form>
        </Paper>


    )
}
export default Form



