import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

// 코멘트 가져오기
export async function GET(){
    const messages = await kv.lrange('comment', 0 , -1);
    return NextResponse.json(messages);
}

export async function POST(request: Request) {
    try{
        const { nickname, content , password } = await request.json();

        if(!content || !password ){
            return NextResponse.json({ error : "Missing content or password!! "}, {status: 400 });
        }

        const newMessage = {
            nickname : nickname?.trim() || "익명",
            content,
            password,
            date : new Date().toISOString(),
        };

        //리스트의 맨 앞에 추가 
        await kv.lpush('comment', newMessage);
        return NextResponse.json({ success : true });
    }catch (error) {
        return NextResponse.json({ error : "Internal Server Error "}, { status : 500 });
    }
}

// 코멘트 삭제
export async function DELETE(request: Request){
    try{
        const { date , password } = await request.json();

        // 전체 목록에서 해당 메시지 찾기
        const messages : any[] = await kv.lrange('comment', 0, -1 );
        
        const target = messages.find((m)=> m.date === date );

        if(!target) {
            return NextResponse.json({ error: "삭제할 메시지를 찾을 수 없습니다. "} , { status: 404 });
        } 

        if(String(target.password).trim() !== String(password).trim() ){
            return NextResponse.json({ error: "비밀번호가 일치하지 않습니다."}, { status: 401 });
        }

        // 일치하는 메세지 삭제
        await kv.lrem('comment', 0, target);
        return NextResponse.json({ success : true });

    }catch (error){
        return NextResponse.json({ error : "삭제 중 오류가 발생하였습니다. "}, { status: 500 });
    }
}