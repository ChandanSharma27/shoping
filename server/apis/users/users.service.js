const pool = require("../../config/database");

module.exports = {
    getallbook : (callback) => {
        pool.query(`SELECT * FROM books`,[],(error,result,field) => {
            if (error){
                return callback(error)
            }
            else {
                return callback(null,result)
            }
        })
    },
    create : (data, callback) => {
        pool.query(`insert into registration(firstName, lastName, number, gender, email, password) values(?,?,?,?,?,?)`,
        [
            data.firstName,
            data.lastName,
            data.number,
            data.gender,
            data.email,
            data.password
        ],
        (error,result,field) => {
            if (error){
                return callback(error)
            }
            else {
                return callback(null,result)
            }
        })
    }, 
    deleteUser : (id, callback) => {
        pool.query(`DELETE FROM registration WHERE id = ?`,[
            id
        ],(error,result,field) => {
            if (error){
                return callback(error)
            }
            else {
                return callback(null,result)
            }
        })
    },
    // updateUser : (data, callback) => {
    //     pool.query(`UPDATE registration SET firstName=?, lastName=?, number=?, gender=?, email=?, password=? WHERE id=?`,
    //     [
    //         data.firstName,
    //         data.lastName,
    //         data.number,
    //         data.gender,
    //         data.email,
    //         data.password,
    //         data.id
    //     ],
    //     (error,result,field) => {
    //         if (error){
    //             return callback(error)
    //         }
    //         else {
    //             return callback(null,result)
    //         }
    //     })
    // },

    updateUser : (data, callback) => {
        // console.log(data)
        pool.query(`UPDATE registration SET firstName=?, lastName=?, number=?, gender=?, email=?, password=? 
        WHERE id=?`,
        [
            data.firstName,
            data.lastName,
            data.number,
            data.gender,
            data.email,
            data.password,
            data.id
        ],
        (error,result,field) => {
            if (error){
                return callback(error);
            }
            
            return callback(null,result);
            
        })
    } 
    
}