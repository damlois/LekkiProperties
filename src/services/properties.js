import axios from 'axios'
const baseUrl = 'https://sfc-lekki-property.herokuapp.com/api'

const getAll = async () => {
    const res = await axios.get(`${baseUrl}/v1/lekki/property`)
    const data = res.data.data.sort((a, b) => b.createdAt - a.createdAt)
    return data
}

const create = async property => {
    try {
        const imagesArray = [];
        const formData = new FormData();
        formData.append("file", property.images[0])
        const uploadRes = await axios({
            method: "post",
            url: `${baseUrl}/v1/lekki/upload`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        property.images = imagesArray.concat(uploadRes.data.data);
        console.log(property);
        const res = await axios.post(`${baseUrl}/v1/lekki/property`, property)
        const data = res.data.data;
        return data
    }
    catch (error) {
        console.log(error);
        const message = error.response.data.error.errors[0].message
        return { message, status: "error" }
    }
}

const update = async (id, property) => {
    const request = axios.put(`${baseUrl}/v1/lekki/property/${id}`, property)
    const res = await request
    return res.data
}

const propertiesService = { getAll, create, update };

export default propertiesService;