<template>
    <div>
        <!--<h1>{{list.name}}</h1>
              <div v-for="list in lists">
               {{list.title}}
              </div>-->

    </div>

</template>


<script>
    import Tasks from './Tasks'
    // import

    export default {
        name: 'list',
        components: { Tasks },
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