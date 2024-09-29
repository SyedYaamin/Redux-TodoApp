import React from 'react'
import Navbar from './Components/Navbar'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from './Config/Redux/Reducers/TodoSplice';


const App = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Dispatch from Redux
  const dispatch = useDispatch();
  // Selector from Redux
  const selector = useSelector(state => state.todos.todo)
  console.log(selector);

  const addTodoInRedux = (data) => {
    console.log(data.todoVal);
    dispatch(addTodo({
      title: data.todoVal,
    }))
    reset();
  }
  const deleteTodoFromRedux = (index) => {
    console.log(index);
    dispatch(removeTodo({
      index: index,
    }))

  }
  const editTodoFromRedux = (index, item) => {
    console.log(index);
    const newVal = prompt("Update the Value: ", item.title);
    dispatch(editTodo({
      index: index,
      title: newVal,
    }))
  }

  return (
    <>
      <Navbar />
      <div className='min-h-[100vh] flex justify-center items-center'>
        <div className='border-2 border-black w-[400px] min-h-[350px] bg-gray-300 rounded-2xl flex flex-col px-10'>
          <h1 className='text-center font-bold text-5xl mt-5'>Todo App</h1>
          <form onSubmit={handleSubmit(addTodoInRedux)} className='flex flex-col items-center mt-6'>
            <input className='p-3 px-5 w-full rounded-3xl outline-none border-2 border-black placeholder:text-black text-black' type="text" placeholder='Enter Todo' {...register("todoVal", { required: true })} />
            <br />
            {errors.todoVal && <span>This field is required</span>}
            <button className='py-3 px-4 mt-2 rounded-xl bg-indigo-700 text-white font-medium hover:bg-indigo-500' type='submit'>Add Todo</button>
          </form>
          <div className='mt-2 p-2'>
            <ul>
              {selector.length > 0 ? selector.map((item, index) => {
                return (
                  <li key={item.id} className='bg-white p-3 mt-2 text-xl font-medium rounded-2xl flex justify-between'>
                    <div>
                      {item.title}
                    </div>
                    <div className='flex flex-row gap-2'>
                      <button onClick={() => editTodoFromRedux(index, item)} className='py-1 px-3 text-sm text-white rounded-xl bg-indigo-700 hover:bg-indigo-500'>Edit</button>
                      <button onClick={() => deleteTodoFromRedux(index)} className='py-1 px-3 text-sm text-white rounded-xl bg-indigo-700 hover:bg-indigo-500'>Delete</button>
                    </div>
                  </li>
                )
              }) : <h1 className='text-center p-2 text-xl font-bold'>No Todo Found</h1>}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default App