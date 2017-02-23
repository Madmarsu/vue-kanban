import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 2000,
    withCredentials: true
})


// REGISTER ALL DATA HERE
let state = {
    boards: [],
    activeBoard: {},
    error: {},
    user: {}

}

// HARDCODE LOGIN FOR TESTING PURPOSES
// api.post('http://localhost:3001/login', {
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
        getBoard(id){
            api('boards/' + id)
                .then(res => {
                    state.activeBoard = res.data.data
                })
                .catch(handleError)
        },
        createBoard(board){
            api.post('boards', board)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        removeBoard(board){
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        login(userEmail, userPassword){
            api.post('http://localhost:3001/login', {
                email: userEmail,
                password: userPassword
            })
                .then(res => {
                    console.log(res.data)
                    if(res.data.data){
                        state.user = res.data.data
                        this.getUserBoards()
                    } else {
                        state.error = res.data.error
                        Materialize.toast(res.data.error, 1000);
                    }
                })
                .catch(handleError)
        },
        register(email, name, password){
            api.post('http://localhost:3001/register', {
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
            api.delete('http://localhost:3001/logout')
                .then(res => {
                    state.user = '';
                    Materialize.toast(res.data.message, 2000);
                })
                .catch(handleError)
        }
    }
}