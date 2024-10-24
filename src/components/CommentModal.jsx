"use client"; 

import { useRecoilState } from "recoil";
import { modalAtom } from '../atom/modalAtom'; 

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalAtom);
  return (
    <div>
      <h1>CommentModal</h1>
      {open && <div>Modal is open</div>}
    </div>
  )
}
