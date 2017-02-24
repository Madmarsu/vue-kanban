<template>

  <div>
    <!-- LANDING PAGE -->
    <div v-if="!this.$root.$data.store.state.user._id">
      <div class="parallax-container">
        <div class="parallax"></div>
      </div>
      <div class="section white">
        <div class="row container">
          <h3 class="header">Learn Kanban</h3>
          <p class="grey-text text-darken-3 lighten-3"></p>
        </div>
        <div class="parallax-container">
        <div class="bgimg-2"></div>
      </div>
      </div>
      <!--<div class="parallax-container">
        <div class="parallax">
          <img src="../assets/images/typewriter.jpg">
        </div>
      </div>-->
    </div>

    <!-- USER AND SHARED BOARDS WHEN LOGGED IN -->
    <div v-if="this.$root.$data.store.state.user._id">
      <h3>Your Boards</h3>

      <button v-if="!showBoardForm" @click="triggerBoardForm" class="waves-effect waves-light btn">Add Board</button>
      <div class="container" v-if="showBoardForm">
        <h5>Add a Board </h5>
        <form class="row" @submit.prevent="addBoard">
          <div class="col s12 input-field">
            <input type="text" id="boardName" v-model="boardName" required>
            <label for="boardName">Title</label>
          </div>
          <div class="col s12 input-field">
            <textarea class="materialize-textarea" id="boardDesc" cols="30" rows="10" v-model="boardDesc"></textarea>
            <label for="boardDesc">Description</label>
          </div>
          <button class="waves-effect waves-teal btn" type="submit">Add Board</button>
          <button @click="triggerBoardForm" class="waves-effect waves-teal btn-flat"><i class="fa fa-times"></i></button>
        </form>
      </div>

      <div class="row">
        <div v-for="userboard in userboards" class="col s12 m3">
          <div class="card hoverable blue-grey darken-1">
            <router-link :to="'/boards/' + userboard._id" @click="getBoard(userboard._id)">
              <div class="card-content white-text">
                <span class="card-title">{{ userboard.name }}</span>
                <p>{{ userboard.description }}</p>
              </div>
            </router-link>
            <div class="card-action right-align">
              <a><i @click="deleteBoard(userboard)" class="fa fa-recycle"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!-- USER AND SHARED BOARDS -->
      <h3>Shared Boards</h3>
      <div class="row">
        <div v-for="sharedboard in sharedBoards" class="col s12 m3">
          <div class="card hoverable blue-grey darken-1">
            <router-link :to="'/boards/' + sharedboard._id" @click="getBoard(sharedboard._id)">
              <div class="card-content white-text">
                <span class="card-title">{{ sharedboard.name }}</span>
                <p>{{ sharedboard.description }}</p>
              </div>
            </router-link>
          </div>
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
    data() {
      return {
        boardName: '',
        boardDesc: '',
        showBoardForm: false
      }
    },
    computed: {
      userboards() {
        return this.$root.$data.store.state.userBoards
      },
      sharedBoards() {
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
          name: this.boardName,
          description: this.boardDesc
        })
        this.showBoardForm = false
        this.boardName = ''
        this.boardDesc = ''
      },
      triggerBoardForm: function () {
        this.showBoardForm = !this.showBoardForm
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
  .parallax {
    /* The image used */
    background-image: url("../assets/images/typewriter.jpg");

    /* Set a specific height */
    min-height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bgimg-2 {
  background-image: url("../assets/images/background1.jpg");
  min-height: 400px;
}

</style>