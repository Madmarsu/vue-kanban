<template>

  <div>
    <!-- LANDING PAGE -->
    <div v-if="!this.$root.$data.store.state.user._id">
      <div class="parallax-container">
        <div class="parallax"><img src="../assets/images/officesupplies.jpg"></div>
        <div class="parallax-container">
          <div class="parallax">
            <img src="../assets/images/typewriter.jpg">
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <h3 class="header">Learn Kanban</h3>
            <p class="grey-text text-darken-3 lighten-3"></p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="this.$root.$data.store.state.user._id">
      <h3>Your Boards</h3>
      <div class="row">
        <div v-for="userboard in userboards" class="col s12 m3">
          <router-link :to="'/boards/' + userboard._id" @click="getBoard(userboard._id)">
            <div class="card hoverable blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ userboard.name }}</span>
                <p>{{ userboard.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    <!-- USER AND SHARED BOARDS -->
    <h3>Shared Boards</h3>
      <div class="row">
        <div v-for="sharedboard in sharedBoards" class="col s12 m3">
          <router-link :to="'/boards/' + sharedboard._id" @click="getBoard(sharedboard._id)">
            <div class="card hoverable blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ sharedboard.name }}</span>
                <p>{{ sharedboard.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>



    <!--<div v-if="this.$root.$data.store.state.user._id">
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
    </div>-->

  </div>


</template>

<script>
  export default {
    name: 'hello',
    computed: {
      userboards() {
        return this.$root.$data.store.state.userBoards
      },
      sharedBoards(){
        return this.$root.$data.store.state.sharedBoards
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