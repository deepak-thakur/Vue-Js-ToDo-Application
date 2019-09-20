<template>
    <div>
        Filter Todos:
        <select class="filterstyle" @change="FilterTodo($event)" >
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
            <option value="5">5</option>

        </select>
    </div>
</template>

<script>
import vue from "vue";
import vuex from "vuex"
import {mapActions} from "vuex";
export default {

    methods:mapActions(['FilterTodo'])
}
</script>

<style>
.filterstyle{
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 5px;
    width: 40px;
    max-width: 70px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    
}
</style>
