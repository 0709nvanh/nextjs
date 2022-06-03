import axios from "axios";

export const getAllPosts = async () => {
    try {
        const res = await axios.get('https://616e3423a83a850017caa863.mockapi.io/post')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getOnePost = async () => {
    const post = await getAllPosts()
}