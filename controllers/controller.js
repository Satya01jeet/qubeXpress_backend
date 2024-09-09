const importData = async (req,res) => {
    try{
        res.send({
            status: 200,
            success: true,
            msg: "file uploaded successfully"
        })
    }catch(error){
        res.send({
            status: 400,
            success: false,
            msg: error.message,
        })
    }
}

module.exports = {
    importData
}