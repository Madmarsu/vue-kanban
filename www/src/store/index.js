import axios from 'axios'

let api = axios.create({
    baseURL: 'http://192.168.0.6:3001/api/',
    timeout: 3000,
    withCredentials: true
})


// REGISTER ALL DATA HERE
let state = {
    userBoards: [],
    sharedBoards: [],
    activeBoard: {},
    activeLists: [],
    activeTasks: [],
    error: {},
    user: {}

}

// HARDCODE LOGIN FOR TESTING PURPOSES
// api.post('http://192.168.0.6:3001/login', {
//     email: 'jaime@jaime.com',
//     password: 'sandbox'
// }).then(res=>{
//     state.user = res.data.data
// })

let handleError = (err) => {
    state.error = err
}

export default {
    // ALL DATA LIVES IN THE STATE
    state,
    // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
    actions: {
        getBoards() {
            api('boards')
                .then(res => {
                    state.boards = res.data.data
                })
                .catch(handleError)
        },
        getUserBoards(){
            api('userboards')
                .then(res => {
                    state.userBoards = res.data.data
                })
                .catch(handleError)
        },
        getSharedBoards(){
            api('sharedboards')
                .then(res => {
                    state.sharedBoards = res.data.data
                })
        },
        getBoard(id){
            api('boards/' + id)
                .then(res => {
                    state.activeBoard = res.data.data
                    this.getTasksandLists(id)
                })
                .catch(handleError)
        },
        getTasksandLists(id){
            api('boards/' + id + '/data')
                .then(res => {
                    console.log(res.data.data)
                    state.activeLists = res.data.data.lists
                    state.activeTasks = res.data.data.tasks
                })
        },
        createBoard(board){
            api.post('boards', board)
                .then(res => {
                    this.getUserBoards()
                })
                .catch(handleError)
        },
        removeBoard(board){
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getUserBoards()
                })
                .catch(handleError)
        },
        addCollab(email, boardId){
            api.post('boards/' + boardId + '/invite', email)
                .then(res => {
                    if(res.data.data.collaborators){
                        Materialize.toast('User added to board', 2000)
                    }
                    this.getSharedBoards()
                })
                .catch(handleError)
        },
        createList(list, boardId){
            api.post('lists', list)
                .then(res => {
                    this.getTasksandLists(boardId)
                })
                .catch(handleError)
        },
        removeList(list, boardId){
            api.delete('lists/' + list._id)
                .then(res => {
                    this.getTasksandLists(boardId)
                })
                .catch(handleError)
        },
        createTask(task, boardId){
            api.post('tasks', task)
                .then(res => {
                    this.getTasksandLists(boardId)
                })
                .catch(handleError)
        },
        removeTask(task, boardId){
            api.delete('tasks/' + task._id)
                .then(res => {
                    this.getTasksandLists(boardId)
                })
                .catch(handleError)
        },
        login(userEmail, userPassword){
            api.post('http://192.168.0.6:3001/login', {
                email: userEmail,
                password: userPassword
            })
                .then(res => {
                    console.log(res.data)
                    if(res.data.data){
                        state.user = res.data.data
                        this.getUserBoards()
                        this.getSharedBoards()
                    } else {
                        state.error = res.data.error
                        Materialize.toast(res.data.error, 1000);
                    }
                })
                .catch(handleError)
        },
        register(email, name, password){
            api.post('http://192.168.0.6:3001/register', {
                email: email,
                name: name,
                password: password
            })
                .then(res => {
                    state.user = res.data.data
                })
                .catch(handleError)
        },
        logout(){
            api.delete('http://192.168.0.6:3001/logout')
                .then(res => {
                    state.user = {};
                    Materialize.toast(res.data.message, 2000);
                })
                .catch(handleError)
        }
    }
}