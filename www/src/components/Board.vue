<template>
    <div>
        <!--<h1>{{board.name}}</h1>
              <div v-for="board in boards">
               {{board.title}}
              </div>-->
    <div class="row">
        <h3>{{ board.name }}</h3>
        <div v-for="list in lists">
            <list :list="list" :tasks="tasks"></list>
        </div>
    </div>

    </div>

</template>


<script>
  import List from './List'
    // import

    export default {
        name: 'board',
        components: { List },
        mounted(){
            this.$root.$data.store.actions.getBoard(this.$route.params.id)
        },
        computed: {
            board(){
                return this.$root.$data.store.state.activeBoard
            },
            lists() {
                return this.$root.$data.store.state.activeLists
            },
            tasks() {
                return this.$root.$data.store.state.activeTasks
            }
        }
    }

</script>


<styles>


</styles>