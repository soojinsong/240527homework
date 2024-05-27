function Profile({name, introduction, viewCount}){
    const divStyle ={
        background: "coral"
    }

    return (
        <div style={divStyle}>
            <p>이름 : {name}</p>
            <p>소개 : {introduction}</p>
            <p>조회수 : {viewCount}</p>
        </div>
    );
}
export default Profile