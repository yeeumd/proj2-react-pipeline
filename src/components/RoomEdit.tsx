import React from 'react'
import { RoomType} from '../api/roomApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'

type RoomProps = {
    room: RoomType;
    handleDelete: any; 
    children: React.ReactNode;
}

export const RoomEdit = ({room, handleDelete}: RoomProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [inputType, setInputType] = useState(room.roomType);
console.log(room);
    if (isEdit) {
        return (
            <div className='container'>
                <input value={room.roomType} onChange={e => setInputType(e.target.value)} />
                <input value={room.roomNumber} />
                <button onClick={() => setIsEdit(false)}>Cancel Edit</button>
            </div>
        )
    }

    return (
        <div className='container'>
            <h2 className='room-details'>{room.roomType}</h2>
            <h3 className='room-details'>{room.roomNumber}</h3>
            <button className='room-details' onClick={() => setIsEdit(true)}>Edit</button>
            <button className='room-details' onClick={() => handleDelete(room.id)}><DeleteIcon />Delete</button>
        </div>
    )
}
