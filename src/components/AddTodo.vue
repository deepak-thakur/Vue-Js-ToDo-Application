<template>
    <div>
    <h3>Add Todo</h3>
        <form name="addtodo">
            <input type="text" v-model="title" placeholder="Add Todo..">
            <input type="submit" @click="addTodo" value="submit">
            

        </form>
    </div>
    
</template>

<script>
import vuex from 'vuex';
import vue from 'vue';
import {mapActions} from 'vuex';
export default {
    data(){
        
        return {
            title:'',
        }
    },
    methods:{
        ...mapActions(['AddTodo']),
        addTodo(e){
            e.preventDefault();
            this.AddTodo(this.title);
            this.title=''
        }
    }
}
</script>

<style>
    form{
    display: flex;
    }

    input[type="text"]{
        border: 1px solid  #41b883;
        flex: 10;
        padding: 10px;
        outline: 0;
        border-radius: 50px;
    }

    input[type="submit"]{
        flex:2;
        background: #41b883;
        border: 1px solid #41b883;
        cursor: pointer;
        color: #fff;   
        border-radius: 50px; 
    }
</style>
