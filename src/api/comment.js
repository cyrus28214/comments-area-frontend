import axios from "axios";

const baseURL = "http://127.0.0.1:4523/m1/4512713-0-default"; //mock server URL

async function getComments(page, size) {
    const url = `${baseURL}/comment/get?page=${page}&size=${size}`;
    const { data } = await axios.get(url);
    return data;
}

async function CreateComment(comment) {
    const url = `${baseURL}/comment/add`;
    const { data } = await axios.post(url, comment);
    return data;
}

async function deleteComment(id) {
    const url = `${baseURL}/comment/delete?id=${id}`;
    const { data } = await axios.post(url);
    return data;
}

export default {
    getComments,
    CreateComment,
    deleteComment
}