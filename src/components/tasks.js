import Taskss from './task'
const Task = ({data}) => {
  
    return(
        <div className='task'>
            {data.map((data)=>(
                <Taskss key={data.id} text={data.text} day={data.day}/>
            ))}
        </div>
    )
}

export default Task; 