<template>
    <div>
        <!--<h1>{{board.name}}</h1>
              <div v-for="board in boards">
               {{board.title}}
              </div>-->
    <div class="row">
        {{ board }}
        <!--<div v-for="list in lists">
            <list :list="list" :tasks="tasks"></list>
        </div>-->
    </div>

    </div>

</template>


<script>
  import List from './List'
    // import

    export default {
        name: 'board',
        components: { List },
        // data() {
        //     return {
        //         board: {
        //             name: 'Jason and Justin',
        //             description: 'they sit next to us',
        //             created: Date.now(),
        //             id: 1
        //         },
        //         lists: [{
        //             name: 'justin doesn\'t know what stores are',
        //             description: 'but he has been to a grocery store, right-aid?',
        //             created: Date.now(),
        //             boardId: 1,
        //             id: 1
        //         },{
        //             name: 'jason has headphones on',
        //             description: 'what is he listening to - probably disco',
        //             created: Date.now(),
        //             boardId: 1,
        //             id: 2
        //         }],
        //         tasks: [{
        //             name: 'keep jason on task',
        //             description: 'take jason\'s headphones off',
        //             created: Date.now(),
        //             listId: 1
        //         },{
        //             name: 'another task',
        //             description: 'too many tasks to do',
        //             created: Date.now(),
        //             listId: 2
        //         }]
        //     }
        // },
        mounted(){
            this.$root.$data.store.actions.getBoard(this.$route.params.id)
        },
        computed: {
            board(){
                return this.$root.$data.store.state.activeBoard
            }
        }
    }

</script>


<styles>


</styles>