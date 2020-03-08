const Transaction = require("./schemas/Transaction")

module.exports = {
    async getRecords(filter){
        console.log(filter)
        let transaction
        try{    
            transaction = await Transaction.find({ $and: [filter]})
        } catch(error) {
            console.log(error)
            transaction = false
        }
        return transaction
    },

    async postRecord(dataObject){
        const transaction = new Transaction(dataObject)
        let success
        try{    
            success = await transaction.save()
        } catch(error) {
            success = false
        }
        return success
    },

    async putRecord(filter, dataObject){
        let success
        try{    
             success = await Transaction.updateOne( { $and: [filter]}, dataObject)
        } catch(error) {
            success = false
        }
        return success
    },

    async deleteRecord(filter){
        let success
        try{    
            success = await Transaction.deleteOne({ $and: [filter]})
        } catch(error) {
            success = false
        }
        return success
    }

}