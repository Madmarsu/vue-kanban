<template>

    <p><strong>{{ task.name }}</strong> - {{ task.description }}</p>

</template>


<script>

import Comments from './Comments'
// import

export default {
    name: 'tasks',
    components: { Comments },
    props: ['task'],

    data () {
        return {

        }
    },
    methods: {
            getTasks: function () {

            },
            createTask: function () {

            },
            modifyTask: function () {

            },
            recycleTask: function () {

            }
    },

}

</script>


<styles>


</styles>