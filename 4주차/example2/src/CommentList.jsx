import React from "react";
import comment from "./Comment";



function CommentList(props){
    const Comments = [
        {
            name : "김만두",
            comment : "안녕하세요~ 만두입니다."
        },
        {
            name : "유재석",
            comment : "리액트 즐거워요."
        },
        {
            name : "김전일",
            comment : "반갑습니다~"
        },
    ];
    return (
        <>
            {
                Comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment = {comment.comment}/>
                );

            })}
        </>
    );


}
export default CommentList;

