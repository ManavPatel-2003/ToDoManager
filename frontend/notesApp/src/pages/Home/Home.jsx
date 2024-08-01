import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd, MdOnDeviceTraining } from 'react-icons/md'
import EditNotes from '../../components/Cards/EditNotes'
import Modal from "react-modal"

function Home() {

  const [openEditNote, setOpenEditNote] = useState(
    {
      isShown: false, 
      types: "add", 
      data: null,
    }
  )
  return (
    <div>
      <Navbar />
      <div className='container mx-auto my-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
          <NoteCard 
            title="Meeting abc" 
            date="12/12/1212" 
            content="Important meeting" 
            onEdit={()=>{}}
            onDelete={()=>{}}
          />
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-800 absolute right-10 bottom-10' 
        onClick={() => {
          setOpenEditNote(
            {
              isShown: true,
              type: "add",
              data: null
            }
          )
        }}>
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <Modal 
        isOpen = {openEditNote.isShown}
        onRequestClose = {() => {}}
        style={
          {
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.2"
            },
          }
        }
        contentLabel=''
        className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll'
        >
          <EditNotes 
            handleClose={
              () => {
                setOpenEditNote({
                  isShown: false, 
                  type: "add", 
                  data: null,
                })
              }
            }
          />
        </Modal>
    </div>
  )
}

export default Home
