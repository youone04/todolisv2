import Figures from '../../../components/Figures';

import { setModalForm } from '../../../redux/actions/ModalFormAction'
import { setSortOption } from '../../../redux/actions/sortOptionsAction'
import { SET_AZ, SET_INCOMPLETED, SET_NEWER, SET_OLDER, SET_ZA } from '../../../redux/constant/action-types'

import TodoCard from './TodoCard'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.selectedActivity.todo_items)
  const sortOptions = useSelector((state) => state.sortOptions)
  const dispatch = useDispatch()

  const showForm = () => {
    dispatch(
      setModalForm({
        isOpen: true,
        titleForm: 'Tambah List Item',
        priority: 'Very High'
      })
    )
  }

  const sortTodos = (action) => {
    switch (action.type) {
      case SET_NEWER:
        return todos.sort((a, b) => b.id - a.id)
      case SET_OLDER:
        return todos.sort((a, b) => a.id - b.id)
      case SET_AZ:
        return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1))
      case SET_ZA:
        return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1))
      case SET_INCOMPLETED:
        return todos.sort((a, b) => b.is_active - a.is_active)
      default:
        return todos
    }
  }

  useEffect(() => {
    sortTodos({ type: sortOptions.sortBy })
    return () => {
      dispatch(setSortOption({ isOpen: false }))
    }
  }, [sortOptions.sortBy])

  if (todos.length > 0) {
    return (
      <div className='flex flex-col w-full space-y-2 md:space-y-3'>
        {todos.map(
          /**
           *
           * @param {{
           * id: number
           * title: string
           * priority: string
           * is_active: number | boolean}} item the parameter is the object of the todo item received from the API
           * @returns
           */
          (item) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              priority={item.priority}
              is_active={item.is_active}
            />
          )
        )}
      </div>
    )
  }

  return (
    <Figures
      onClick={showForm}
      data-cy='todo-empty-state'
      src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004'
    />
  )
}

export default TodoList
