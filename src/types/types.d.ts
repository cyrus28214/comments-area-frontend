type Response<T> = {
    code: number;
    msg: string;
    data: T;
}

type CommentRequest = {
    name: string;
    content: string;
};

type Comment = {
    id: number;
    name: string;
    content: string;
};

export type { Response, CommentRequest, Comment };