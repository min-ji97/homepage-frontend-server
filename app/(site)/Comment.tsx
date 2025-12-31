"use client"

import React, { useEffect, useState } from 'react'
import { CgSpinner } from "react-icons/cg";

/**
 * 방명록(Guestbook) 컴포넌트
 * - 사용자 메시지 입력 및 목록 표시
 */
const Comment = () => {

  const [ nickname , setNickname ] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [commentList, setCommentList ] = useState<any[]>([]);
  const [isLoading, setIsLoading ] = useState(false);

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages ] = useState(1);


  // 댓글 삭제 - 비밀번호 모달
  const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState(false);
  const [targetDate, setTargetDate] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  // 삭제 성공시 모달 문구 보여주기
  const [ isSuccess , setIsSuccess ] = useState(false);

  // 방명록 보여주기
  const fetchMessages = async (currentPage : number) => {
    const res = await fetch(`/api/comment?page=${currentPage}`);
    const data = await res.json();
    setCommentList(data.messages || []);
    setTotalPages(data.totalPages || 1);
  };

  useEffect(()=>{
    fetchMessages(page);
  },[page]);


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
        nickname : nickname,
        content: comment,
        password: password
      }),
    });

    setNickname("");
    setComment("");
    setPassword("");
    setPage(1);
    await fetchMessages(1); //방명록 재업로드
    setIsLoading(false);
    
  }
  
  //  댓글 삭제 버튼 클릭 -> 모달 
  const handleDeleteClick = (date: string) => {
    setTargetDate(date);
    setIsDeleteModalOpen(true);
    setDeletePassword(""); // 이전 입력값 초기화
  };

  // 모달 -'삭제' 눌렀을 때 실제 실행되는 함수
  const confirmDelete = async () => {
    if (!deletePassword) return;

    const res = await fetch('/api/comment', {
      method: 'DELETE',
      body: JSON.stringify({ date: targetDate, password: deletePassword })
    });

    if (res.ok) {
      setIsSuccess(true); // 삭제 성공 모달 보여주기

      setTimeout(async () => {
        setIsDeleteModalOpen(false); //모달 닫기
        setIsSuccess(false); // 성공 모달 닫기
        setDeletePassword(""); // 초기화
  
        // 현재 페이지 유지 
        if (commentList.length === 1 && page > 1) {
          setPage(prev => prev - 1);
        } else {
          //현재 페이지에서 모든 댓글 삭제했을 때 이전 페이지로 이동시켜주기
          if(commentList.length === 1 && page > 1 ){
            setPage(prev => prev - 1);
          }else{
            await fetchMessages(page);
          }
        }
      }, 1500); 
    } else {
      const errorData = await res.json();
      alert(errorData.error || "비밀번호가 틀렸습니다.");
    }
  };

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
          <div className='flex gap-2'>
            <input
              type="text"
              placeholder="닉네임(선택)"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="p-2 text-sm bg-neutral-800 border border-neutral-700 rounded-md text-white w-full sm:w-1/3 min-w-[92px] focus:outline-none focus:border-neutral-500"
            />
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="p-2 text-sm bg-neutral-800 border border-neutral-700 rounded-md text-white w-full sm:w-1/3 min-w-[71px] focus:outline-none focus:border-neutral-500"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full sm:w-auto min-w-[140px] px-6 py-2 bg-white text-black rounded-md font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 whitespace-nowrap  transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <CgSpinner className='animate-spin' size={20} />
                {/* <span>등록 중...</span> */}
              </>
              ):( 
                "등록하기"
              )}
          </button>
          </div>
      </div>

      {/* 메시지 목록 (임시) */}
      <div className="space-y-4">
        {commentList.length === 0 ? (//데이터 존재X
          <div className="text-sm text-neutral-400">등록된 방명록이 없습니다.</div>
        ):(
          //  방명록 존재
          commentList.map((item) => {
            return(
              
              <div key={item.date} className="p-4 bg-neutral-800/40 rounded-md border border-neutral-800">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-blue-400">{item.nickname || "익명"}</span>
                  <button 
                    onClick={() => handleDeleteClick(item.date)}
                    className="text-[11px] text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    삭제
                  </button>
                </div>
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
         {/* 페이지네이션 버튼 */}
         <div className="flex justify-center items-center gap-4 mt-8">
          <button 
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
              className="px-3 py-1 bg-neutral-800 rounded-md transition-all 
                        disabled:bg-transparent disabled:text-neutral-700 disabled:border-neutral-800 border border-transparent"
            >
            <span className="text-sm">‹</span>
          </button>
                  
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`relative w-9 h-9 rounded-lg text-sm font-bold transition-all duration-300 ${
                  page === num 
                    ? "text-white shadow-lg scale-110" 
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {page === num && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-[inset_0_0_8px_rgba(255,255,255,0.3)]" />
                )}
                <span className="relative z-10">{num}</span>
              </button>
            ))}
          </div>

          <button 
            disabled={page === totalPages}
            onClick={() => setPage(prev => prev + 1)}
            className="px-3 py-1 bg-neutral-800 rounded-md transition-all 
                        disabled:bg-transparent disabled:text-neutral-700 disabled:border-neutral-800 border border-transparent"
            >
            <span className="relative z-10 text-sm">›</span>
          </button>
        </div>
      </div>

      {isDeleteModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
    <div className="w-full max-w-xs bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-2xl">
      
      {/* 성공했을 때만 이 내용이 보이고, 아니면 원래 입력창이 보여요! */}
      {isSuccess ? (
        <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
          <p className="text-white font-bold text-lg">삭제되었습니다! ✨</p>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-bold mb-4 text-white">비밀번호 확인</h3>
          <input 
            type="password"
            placeholder="비밀번호 입력"
            value={deletePassword}
            onChange={(e) => setDeletePassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && confirmDelete()}
            className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-purple-500 mb-4"
            autoFocus
          />
          <div className="flex gap-2">
            <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 py-2 bg-neutral-800 text-neutral-400 rounded-lg">
              취소
            </button>
            <button onClick={confirmDelete} className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold">
              삭제하기
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)}

      
    </section>
  )
}

export default Comment;