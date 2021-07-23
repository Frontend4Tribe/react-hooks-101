import React from 'react'

const Event = ({ dispatch, event }) => {
    const id = event.id
    const handleClickDeleteButton = e => {
        e.preventDefault()
        const result = window.confirm(`イベント{id=${id}}を本当に削除しても良いですか？`)
        if (result) {
            dispatch({
                type: 'DELETE_EVENT', id
            })
        }
    }

    return (
        <tr>
            <th scope="row">{event.id}</th>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td className="text-center"><button className="btn btn-danger btm-sm" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event
