function CommentView() {
    return (
        <div className="flex text-base-content w-full items-center rounded-md hover:bg-base-200">
            <div className="bg-base-content w-1 rounded-md self-stretch my-0.5"></div>
            <div className="p-6">
                <h2 className="text-xl font-semibold">Comments</h2>
                <p className="test-">No comments yet.</p>
            </div>
            <button className="btn btn-outline ml-auto mr-5">Delete</button>
        </div>
    );
}

function CommentList() {
    return (<div className="flex flex-col w-full space-y-2">
        {Array.from({ length: 15 }, (_, i) => <CommentView key={i} />)}
    </div>);
}

export default CommentList;