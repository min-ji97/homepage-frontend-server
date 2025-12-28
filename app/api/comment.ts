import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

// 코멘트 가져오기
export async function GET(){
    const messages = await kv.lrange('comment', 0 , -1);
    return NextResponse.json(messages);
}

export async function POST(request: Request) {
    try{
        const { content , password } = await request.json();

        if(!content || !password ){
            return NextResponse.json({ error : "Missing content or password!! "}, {status: 400 });
        }

        const newMessage = {
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