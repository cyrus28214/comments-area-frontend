function InputComment() {
    return (
        <div className="card w-full bg-base-200 text-base-content shadow-xl">
            <div className="card-body space-y-2 items-center">
                <h2 className="card-title">Add a Comment</h2>
                <input type="text" placeholder="Username" className="text-base input input-bordered input-primary w-full" />
                <textarea className="textarea textarea-primary w-full text-base h-28" placeholder="Comment Content"></textarea>
                <button className="btn btn-primary self-end">Submit</button>
            </div>
        </div>
    );
}

export default InputComment;