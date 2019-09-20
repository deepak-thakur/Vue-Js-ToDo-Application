<template>
    
    <div>
        <h3>Todos</h3>

      <div class="legend">
      <span>Double click to mark as complete</span>
      <span>Single click to mark as incomplete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>

        <div class="todos">
            <div v-bind:class="{'is-complete':todo.completed }" @dblclick="onDblClick(todo)" :key="todo.id" v-for="todo in allTodos" class="todo">
                {{todo.title}}
            <i @click="DeleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
             </div>
       
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {

    computed:{
      ...mapGetters([
          'allTodos'
      ]),
    },
    methods:{
    ...mapActions(['FetchTodo','DeleteTodo','UpdateTodo']),
       onDblClick(todo){
         const updateTodo = {
             id:todo.id,
             title:todo.title,
             completed:!todo.completed
         }
         this.UpdateTodo(updateTodo);   
       }
    },

    mounted(){
        this.FetchTodo();
    }

 };
</script>

<style scoped>
.todos {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  grid-gap: 1rem !important;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i{
    position: absolute;
    bottom: 10px;
    right:10px;
    color:#fff;
    cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.is-incomplete{
    background: red;
  color: #fff;
}
</style>
