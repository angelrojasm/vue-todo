<template>
    <div id="list" >
       <Task  v-for="text in taskArr" v-bind:key="text.id" :Text="text" :deleteItem="deleteItem"  />
    </div>
</template>
<script>
import Task from './Task.vue'
export default {
    name: 'TaskList',
    components: {
        Task
    },
    props: [
        'taskArr',
        'deleteItem'
    ],
    data() {
        return {
        }
    },
}
</script>
<style scoped>
#list {
	height: 61.5%;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

</style>