import { useState } from "react";
import api from "../api/comment";

function InputComment({ fetchComments }) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [nameError, setNameError] = useState("");
    const [contentError, setContentError] = useState("");

    const handleSubmit = async (e) => {
        if (!name) setNameError("Username is required");
        else setNameError("");
        if (!content) setContentError("Content is required");
        else setContentError("");
        if (!name || !content) return;
        await api.CreateComment({ name, content });
        setName("");
        setContent("");
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
                    {contentError && <p className="ml-2 text-xs text-error">{contentError}</p>}
                    <textarea
                        className={`textarea textarea-primary w-full text-base h-28
                    ${contentError ? "textarea-error" : "textarea-primary"}`}
                        placeholder="Comment Content"
                        value={content} onChange={(e) => setContent(e.target.value)}>
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