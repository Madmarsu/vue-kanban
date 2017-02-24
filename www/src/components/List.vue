<template>
    <div>
        <div class="col s3">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{{ list.name }}</span>
                    <p>{{ list.description }}</p>
                    <div v-if="tasks[0]" class="card-content blue-grey lighten-1" style="border-radius: 10%">
                        <div v-for="task in tasks" class="left-align">
                            <task v-if="task.listId == list._id" :task="task"></task>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
    import Task from './Tasks'
    // import

    export default {
        name: 'list',
        components: { Task },
        props: ['list', 'tasks'],
        data() {
            return {

            }
        },
        methods: {
            getLists: function () {

            },
            createList: function () {

            },
            modifyList: function () {

            },
            recycleList: function () {

            }
        },

    }

</script>


<styles>


</styles>