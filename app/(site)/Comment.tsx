"use client"

import React, { useEffect, useState } from 'react'

/**
 * 방명록(Guestbook) 컴포넌트
 * - 사용자 메시지 입력 및 목록 표시
 */
const Comment = () => {

  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [commentList, setCommentList ] = useState<any[]>([]);
  const [isLoading, setIsLoading ] = useState(false);

  const fetchMessages = async () => {
    const res = await fetch('/api/comment');
    const data = await res.json();
    setCommentList(data || []);
  };

  useEffect(()=>{
    fetchMessages();
  },[]);


  // 코멘트 전송
  const handleSubmit = async () => {
    if(!comment.trim() || !password.trim()){
      alert("메세지와 비밀번호를 입력해주세요.");
      return;
    }
    setIsLoading(true); 
    
    await fetch('/api/comment',{
      method: 'POST',
      body: JSON.stringify({
        content: comment,
        password: password
      }),
    });

    setComment("");
    setPassword("");
    fetchMessages(); //방명록 재업로드
    setIsLoading(false);

  }
  



  return (
    <section className="w-full p-4 border border-neutral-800 rounded-lg bg-neutral-900/50">
      <h2 className="text-xl font-bold mb-4">방명록</h2>
      
      {/* 메시지 입력창 */}
      <div className="flex flex-col gap-2 mb-6">
        <textarea 
          placeholder="메시지를 남겨주세요..."
          value={comment}
          onChange={ (e) => setComment(e.target.value) }
          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:border-neutral-500 transition-colors"
        />
        <div className="flex justify-between items-center gap-2">
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="삭제용 비밀번호"
            className="p-2 text-sm bg-neutral-800 border border-neutral-700 rounded-md text-white w-40 focus:outline-none focus:border-neutral-500"
          />
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50"
          >
            {isLoading ? "등록 중..." : "등록하기"}
          </button>
          </div>
      </div>

      {/* 메시지 목록 (임시) */}
      <div className="space-y-4">
        {commentList.length === 0 ? (//데이터 존재X
          <div className="text-sm text-neutral-400">등록된 방명록이 없습니다.</div>
        ):(
          //  방명록 존재
          commentList.map((item, idx) => {
            return(
              <div key={idx} className="p-4 bg-neutral-800/40 rounded-md border border-neutral-800">
                <p className="text-neutral-200 mb-2">{item.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500">
                    {new Date(item.date).toLocaleString()}
                  </span>
                </div>
              </div>
            )
          })
        )}
      
      </div>
    </section>
  )
}

export default Comment;