import { useState } from "react";
import api from "../api/comment";

function InputComment({ fetchComments }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [nameError, setNameError] = useState("");
    const [commentError, setCommentError] = useState("");

    const handleSubmit = async (e) => {
        if (!name) setNameError("Username is required");
        else setNameError("");
        if (!comment) setCommentError("Content is required");
        else setCommentError("");
        if (!name || !comment) return;
        const { data } = await api.CreateComment(name, comment);
        setName("");
        setComment("");
        fetchComments();
    }

    return (
        <div className="card w-full bg-base-200 text-base-content shadow-xl">
            <div className="card-body space-y-2 items-center">
                <h2 className="card-title">Add a Comment</h2>
                <div className="w-full">
                    {nameError && <p className="ml-2 text-xs text-error">{nameError}</p>}
                    <input type="text" placeholder="Username"
                        className={`text-base input input-bordered w-full
                    ${nameError ? "input-error" : "input-primary"}`}
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="w-full">
                    {commentError && <p className="ml-2 text-xs text-error">{commentError}</p>}
                    <textarea
                        className={`textarea textarea-primary w-full text-base h-28
                    ${commentError ? "textarea-error" : "textarea-primary"}`}
                        placeholder="Comment Content"
                        value={comment} onChange={(e) => setComment(e.target.value)}>
                    </textarea>
                </div>
                <button className="btn btn-primary self-end"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default InputComment;