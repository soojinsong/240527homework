import React from "react";

// html 느낌. 양식만드는 곳
function Profile(Props){
    const divstyle = {
        backgroundColor: "coral"
    }
    return(
        <div style={divstyle}>
            <p>이름 : {Props.name}</p>
            <p>소개 : {Props.introduction}</p>
            <p>조회수 : {Props.viewCount}</p>
        </div>
    );
}
export default Profile;