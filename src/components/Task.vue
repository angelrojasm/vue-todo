<template>
    <div id='list-entry'>
			<p :class="[checked? 'entry-text checked': 'entry-text']">{{ Text }}</p>
			<div className='icons'>
				<FontAwesomeIcon
					id='check-icon'
					icon="check"
					@click.prevent="checked = true"
				/>
				<FontAwesomeIcon
					id='trash-icon'
					icon="trash"
					@click.prevent="deleteItem(Text)" 
				/>
			</div>
		</div>
</template>
<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {
    name: 'Task',
    components: {
        FontAwesomeIcon
    },
    props: [
        'Text',
        'deleteItem'
    ],
    data() {
        return {
            checked: false
            }
        }
    }
    
</script>

<style scoped>

#list-entry {
	text-align: left;
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-between;
    align-items: center;
    margin: 0%;
    padding: 0%;
}

.entry-text {
	color: black;
	margin-left: 5%;
	font-size: 15px;
}

.icons {
	margin-right: 5%;
}
.icons * {
	height: 35%;
	padding: 5px;
	cursor: pointer;
	transition: all 100ms linear;
	margin: 2px; 
}

.checked {
	text-decoration: line-through;
}
#check-icon,
#trash-icon {
	color: black;
}

#check-icon:hover {
	color: green !important;
}
#trash-icon:hover {
	color: red;
}

</style>