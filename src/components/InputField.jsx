


function InputField ({ task, setTask }) {
    
    return(
        <>
            <input 
                type="text" 
                placeholder="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)} 
                />
        </>
    );

}

export default InputField