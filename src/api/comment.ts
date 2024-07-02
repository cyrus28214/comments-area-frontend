import axios from "axios";
import { Comment, CommentRequest, Response } from "../types/types";

// const baseURL = "http://127.0.0.1:4523/m1/4512713-0-default"; //mock server URL
const baseURL = "http://localhost:3000";

type getCommentsResponse = Response<{
    comments: Comment[];
    total: number;
}>;
async function getComments(page: number, size: number): Promise<getCommentsResponse> {
    const url = `${baseURL}/comment/get?page=${page}&size=${size}`;
    const { data } = await axios.get(url);
    return data as getCommentsResponse;
}

type CreateCommentResponse = Response<Comment>;
async function CreateComment(comment: CommentRequest): Promise<CreateCommentResponse> {
    const url = `${baseURL}/comment/add`;
    const { data } = await axios.post(url, comment, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return data as CreateCommentResponse;
}

type deleteCommentResponse = Response<null>;
async function deleteComment(id: number): Promise<deleteCommentResponse> {
    const url = `${baseURL}/comment/delete?id=${id}`;
    const { data } = await axios.post(url);
    return data as deleteCommentResponse;
}

export default {
    getComments,
    CreateComment,
    deleteComment
}