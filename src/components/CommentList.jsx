import { useEffect, useState } from "react";
import api from "../api/comment";

function CommentView({ comment, loading }) {
    if (loading) {
        return <div className="skeleton w-full h-24 rounded-md"></div>
    }
    return (
        <div className="flex text-base-content w-full items-center rounded-md hover:bg-base-200">
            <div className="bg-base-content w-1 rounded-md self-stretch my-0.5"></div>
            <div className="p-6">
                <h2 className="text-xl font-semibold">{comment.name}</h2>
                <p className="test-">{comment.content}</p>
            </div>
            <button className="btn btn-outline ml-auto mr-5">Delete</button>
        </div>
    );
}

function CommentList({ fetchComments, comments, loading }) {
    return (<div className="flex flex-col w-full space-y-4">
        {comments.map((comment) => (
            <CommentView key={comment.id} comment={comment} loading={loading} />
        ))}
    </div>);
}

export default CommentList;