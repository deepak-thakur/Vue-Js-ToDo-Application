
import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
    async FetchTodo({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        
        commit('setTodos',response.data);
    },
    
    async AddTodo({commit},title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false});
        console.log("new todo", response.data);
        commit('newTodo',response.data);
        
    },
    async DeleteTodo ({commit},id){
         await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        // console.log("deleted record", response.data);
        commit('deleteNewTodo',id);
    },

    async FilterTodo ({commit},e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log("limit is ", limit); 

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        
        commit('setTodos',response.data);
    },
     
    async UpdateTodo({commit},updTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        
        console.log("updated data",response.data);
        commit('UpdateTodo',response.data);   
    }
        

};

const mutations = {
    setTodos: (state,todos) => (state.todos = todos),
    newTodo:(state,todo) => (state.todos.unshift(todo)),
    // deleteNewTodo:(state,id) => state.todos = state.todos.filter(todo=> todo.id) !==id)
    deleteNewTodo:(state,id) => state.todos = state.todos.filter(todo =>todo.id !== id),

    UpdateTodo:(state,updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if(index !== -1){
            state.todos.splice(index,1,updTodo);
        }
    }    

   
};

export default {
  state,
  getters,
  actions,
  mutations
};