let Boards = require('../models/board')
let Lists = require('../models/list')

// export default {
//   userBoards: {
//     path: '/userboards',
//     reqType: 'get',
//     method(req, res, next){
//       let action = 'Find User Boards'
//       Boards.find({userId: req.session.uid})
//         .then(boards => {
//           boards.forEach(board => {
//             console.log(board)
//             Lists.find({boardId: board._id})
//               .then(lists => {
//                 console.log(lists);
//                 board.list = lists
//               })
//               .catch(error => {
//                 return next(handleResponse())
//               })
//           })
//           res.send(handleResponse(action, boards))
//         }).catch(error => {
//           return next(handleResponse(action, null, error))
//         })
//     }
//   }
// }

export default {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Boards'
      Boards.find({userId: req.session.uid})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}

function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }