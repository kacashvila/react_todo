let todoID = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: todoID++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})