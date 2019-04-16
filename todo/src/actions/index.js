export const ADD_TODO = "ADD_TODO"; 

export const addNewTodo = newTodo => {
    console.log(newTodo);
    return { 
        type: ADD_TODO, 
        payload: newTodo
    }
}