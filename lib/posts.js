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
    const posts = await getAllPosts()

    return posts.map(item => ({
        params:{
            id: `${item.id}`
        }
    }))
}

export const getPostById = async id => {
    try {
        const res = await axios.get(`https://616e3423a83a850017caa863.mockapi.io/post/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}