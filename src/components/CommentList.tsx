import React from "react";
import { Comment } from "../types/types";

function CommentSkeleton(): JSX.Element {
    return (
        <div className="skeleton w-full h-28 rounded-md"></div>
    );
}

function CommentView({ comment, deleteComment }: { comment: Comment, deleteComment: () => void }): JSX.Element {
    return (
        <div className="flex text-base-content w-full items-center rounded-md hover:bg-base-200">
            <div className="bg-base-content w-1 rounded-md self-stretch my-0.5"></div>
            <div className="p-6">
                <h2 className="text-xl font-semibold">{comment.name}</h2>
                <p className="test-">{comment.content}</p>
            </div>
            <button className="btn btn-outline ml-auto mr-5" onClick={deleteComment}>Delete</button>
        </div>
    );
}

function CommentList({ comments, loading, deleteComment }): JSX.Element {
    if (loading) {
        return (<div className="flex flex-col w-full space-y-4">
            {Array(10).fill(null).map((_, i) => <CommentSkeleton key={i} />)}
        </div>)
    }
    return (<div className="flex flex-col w-full space-y-4">
        {comments.map((comment) => (
            <CommentView
                key={comment.id}
                comment={comment}
                deleteComment={() => deleteComment(comment.id)} />
        ))}
    </div>);
}

export default CommentList;