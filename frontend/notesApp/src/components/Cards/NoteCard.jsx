import React from 'react'
import {MdCreate, MdDelete} from 'react-icons/md';

function NoteCard({
    title, 
    date, 
    content,
    onEdit, 
    onDelete
}) {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
      <div className='flex items-center justify-between'>
        <div>
            <h6 className='text-sm font-medium'>{title}</h6>
            <span className='text-xs'>{date}</span>
        </div>

        <p className='text-xs text-slate-600'>{content?.slice(0, 60)}</p>

        <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2'>
                <MdCreate className='icon-btn hover:text-green-600' onClick={onEdit} />
                <MdDelete className='icon-btn hover:text-red-600' onClick={onDelete} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
