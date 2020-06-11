require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGO_URI
mongoose.set('debug', true);

module.exports = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// module.exports = {

//     connect : function () { 
//         Promise((resolve, reject) => {
//             mongoose.connect(process.env.MONGO_URI, {
//                 useNewUrlParser: true,
//                 useFindAndModify: false
//             })



//             mongoClient.connect((err, client) => {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(client.db('eat_da_burger').collection('burgers'))
//                 }
//             })
//         })
//     }
// }