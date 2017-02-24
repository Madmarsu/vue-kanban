<template>
  <!--<div class="hello">-->
  <div>
    <!-- V-IF = "THIS.$ROOT.USER._ID" -->
    <!--<div>-->
    <!-- LANDING PAGE -->
    <!--<div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br><br>
            <h1 class="header center teal-text text-lighten-2">Parallax Template</h1>
            <div class="row center">
              <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div class="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>
            <br><br>

          </div>
          <div class="parallax"><img src="../assets/background1.jpg" alt="Unsplashed background img 1"></div>
        </div>
      </div>
      <h1>{{ msg }}</h1>-->

    <!--<div>
      <h3>Your Boards</h3>
      <div class="row">
        <div v-for="userboard in userboards" class="col s12 m3">
          <router-link :to="'/boards/' + userboard.id" @click="getBoard(userboard.id)">
            <div class="card hoverable blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ userboard.name }}</span>
                <p>{{ userboard.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>-->
    <!-- USER AND SHARED BOARDS -->
    <!--<h3>Shared Boards</h3>
      <div class="row">
        <div v-for="sharedboard in sharedBoards" class="col s12 m3">
          <router-link :to="'/boards/' + sharedboard.id" @click="getBoard(sharedboard.id)">
            <div class="card hoverable blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ sharedboard.name }}</span>
                <p>{{ sharedboard.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>-->

    <div>
      <div class="parallax-container">
        <div class="parallax"><img src="../assets/images/officesupplies.jpg"></div>

        <h3 class="center-aligned white-text">Boards</h3>
        <button @click="addBoard">Add Board</button>
        <div class="row container">
          <div v-for="board in boards" class="col s12 m3">
            <div class="card hoverable blue-grey darken-1">
              <router-link :to="'/boards/' + board._id" @click="getBoard(board._id)">
                <div class="card-content white-text">
                  <span class="card-title">{{ board.name }}</span>
                  <p>{{ board.description }}</p>
                </div>
              </router-link>
              <div class="card-action right-align">
                <a><i @click="deleteBoard(board)" class="fa fa-recycle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section white">
        <div class="row container">
          <h3 class="header">Learn Kanban</h3>
          <p class="grey-text text-darken-3 lighten-3"></p>
        </div>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/images/typewriter.jpg">
      </div>



    </div>
  </div>


</template>

<script>
  export default {
    name: 'hello',
    // data() {
    //   return {
    //     msg: 'Welcome to Your Kanban Web App',
    //     userboards: [{
    //       name: 'Jaime\'s Board',
    //       description: 'have to stay on task.......',
    //       created: Date.now(),
    //       id: 1
    //     }, {
    //       name: 'Dave\'s Board',
    //       description: 'SCRUM MASTER',
    //       created: Date.now(),
    //       id: 2
    //     }],
    //     sharedBoards: [{
    //       name: 'Jason and Justin',
    //       description: 'they sit next to us',
    //       created: Date.now()
    //     }]
    //   }
    // },
    mounted() {
      this.$root.$data.store.actions.getBoards()
    },
    computed: {
      boards() {
        return this.$root.$data.store.state.boards
      }
    },
    methods: {
      getBoard: function (boardId) {
        console.log(boardId)
      },
      deleteBoard: function (board) {
        this.$root.$data.store.actions.removeBoard(board)
      },
      addBoard: function () {
        this.$root.$data.store.actions.createBoard({
          name: 'This is a test board',
          description: 'this is a description'
        })
      }
    }
  }
  $(document).ready(function () {
    $('.parallax').parallax();
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parallax-container {
    height: 400px;
  }
</style>