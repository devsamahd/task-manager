import {useState} from 'react'
import Button from './components/button'
import Task from './components/tasks'
import {data} from './data'

const App = () => {
    
     const [task, setTask] = useState(data)

    return(
        <div className='container'>
            <h1 className='header'>Task Manager</h1>
            <Button/>
            <Task data={data}/>
        </div>
    )
}

export default App;