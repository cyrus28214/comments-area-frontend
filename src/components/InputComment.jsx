import { useState } from "react";
import api from "../api/comment";

function InputComment({ comments, setComments }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await api.CreateComment(name, comment);
        setName("");
        setComment("");
        setComments([data, ...comments]);
        console.log(data);
    }

    return (
        <div className="card w-full bg-base-200 text-base-content shadow-xl">
            <div className="card-body space-y-2 items-center">
                <h2 className="card-title">Add a Comment</h2>
                <input type="text" placeholder="Username" className="text-base input input-bordered input-primary w-full"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <textarea className="textarea textarea-primary w-full text-base h-28" placeholder="Comment Content"
                    value={comment} onChange={(e) => setComment(e.target.value)}>
                </textarea>
                <button className="btn btn-primary self-end"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default InputComment;