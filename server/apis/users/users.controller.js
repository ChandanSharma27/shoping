const { getallbook, create, deleteUser, updateUser } = require("../users/users.service");
// const { create } = require("../users/users.service");

module.exports = {
    getbooks : (req,res) => {
        getallbook((error,result)=>{
            if(error){
                return res.json({
                    status : 0,
                    message : "error or no result found"
                })
            }
            return res.json({
                status : 202,
                data : result
            })
            
        })
    },
    createusers : (req,res) => {
        const body = req.body;
        create(body,(error,result) => {
            if (error){
                console.log(error)
                return res.status(500).json({
                    status : 0,
                    message : "not able to insert"
                })
            }
            else{
                return res.status(200).json({
                    status : 1,
                    data : result
                })
            }
        })
        
    },
    userDelete : (req,res) => {
        const id = req.params.id;
        deleteUser(id,(error,result) => {
            if (error){
                console.log(error)
                return res.status(500).json({
                    status : 0,
                    message : "not able to delete"
                })
            }
            else{
                return res.status(200).json({
                    status : 1,
                    data : result
                })
            }
        })
        
    },
    updateusers : (req,res) => {
        const body = req.body;
        updateUser(body,(error,result) => {
            if (error){
                console.log(error)
                return res.status(500).json({
                    status : 2,
                    message : "not able to update"
                })
            }
            else{
                return res.status(200).json({
                    status : 1,
                    data : result
                })
            }
        })
        
    },
}