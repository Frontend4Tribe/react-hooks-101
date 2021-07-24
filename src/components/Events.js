import React from 'react'

import Event from './Event'

const Events = (props) => {
  const {state, dispatch} = props

	return (
		<>
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
					{ state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
				</tbody>
			</table>
		</>
	)
}

export default Events
