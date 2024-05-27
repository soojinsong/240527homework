import React from "react";
import Comment from "./Comment";

function CommentList(props)
{
    const Comments = [
        {
            id : "m00",
            name : "김ㅁㅁ",
            comment : "안녕하세요~ 김ㅁㅁ입니다.",
        },
        {
            id : "m01",
            name : "이ㅇㅇ",
            comment : "리액트 즐거워요.",
        },
        {
            id: "m02",
            name : "박ㅁㅁ",
            comment : "반갑습니다~",
        }
    ];
    return(
        <>
            {Comments.map((comment)=>{
                return(
                    <Comment key={comment.id} name={comment.name} comment = {comment.comment}/>
                );
            })}
        </>
    );
}
export default CommentList;