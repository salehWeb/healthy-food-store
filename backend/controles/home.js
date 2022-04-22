import postCart from '../module/cart.js'

export const getCard = async (req, res) => {
    try {
        const data = await postCart.find({})
        await res.status(200).json(data)
    } catch (error) {
        res.status(400).json('some thank going woring' + error)
        console.log(error)
    }
}

export const PostData = async (req, res) => {
    const form = req.body
    const newPost = new postCart({ ...form, creatAt: new Date().toISOString() });
    try {
        newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json(' canot post your data try agin ' + error)
        console.log(error)
    }
}

export const getOneCard = async (req, res) => {
    try {
        const data  = await req.body;
        console.log(data);
        // const data = await postCart.findById(id)
        // res.status(200).json(data)
        // console.log(data);
    } catch (error) {
        res.status(404).json(error)
        console.log(error);
    }
}