import Profile from "./Profile";

// 함수 짜는 곳.
function Report(Props){
    // 리스트로 저장하고
    const member = [
        {
            id : "m00",
            name:"김ㅁㅁ",
            introduction : "안녕하세요. 김ㅁㅁ입니다.",
            viewCount : 1500
        },
        {   
            id : "m01",
            name:"이ㅇㅇ",
            introduction : "안녕하세요. 이ㅇㅇ입니다.",
            viewCount : 2500
        },
        {
            id: "m02",
            name:"A",
            introduction : "안녕하세요. A입니다.",
            viewCount : 3000
        },
    ];

    // 리턴문에는 맵으로
    return(
        <>
            {member.map((p)=> {
                return(
                    <Profile key={p.id} name={p.name} introduction={p.introduction} viewCount={p.viewCount}/>
                );
            })}
        </>
    );
}
export default Report;