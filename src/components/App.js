import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  console.log({state})

  return (
    <div className="container-fluid">
      <h4 className="mt-5">イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => {setTitle(e.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => {setBody(e.target.value)}} />
        </div>
        <div className="btn-group btn-group-toggle">
          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </div>
      </form>
      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">ID</th>
            <th scope="col" className="text-center">タイトル</th>
            <th scope="col" className="text-center">ボディー</th>
            <th scope="col" className="text-center">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="text-center"><button className="btn btn-danger btm-sm">削除</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td className="text-center"><button className="btn btn-danger btm-sm">削除</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td className="text-center"><button className="btn btn-danger btm-sm">削除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
