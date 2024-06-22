const Snack = require('../models/Snack')
module.exports.getAllSnacks = async (req, res, next) => {
    try {
        const snacks = await Snack.find();
        if(!snacks){
            return res.status(400).json({message: 'Snacks not found'});
        }
        res.status(200).json(snacks);
        
    } catch (error) {
        console.log(error)
        
    }
};
module.exports.getOneSnack = async (req, res, next) => {
    try {
        const snackName = req.body.name;
        console.log(snackName)
        if(!snackName){
            return res.status(400).json({message: 'Invalid snack name'});
        }
        const snackInfo = await Snack.findOne({name: snackName});
        console.log(snackInfo)

        if(!snackInfo){
            return res.status(400).json({message: 'Snack not found'});
        }
        res.status(200).json(snackInfo);
    } catch (error) {
        console.log(error)
        
    }
}
