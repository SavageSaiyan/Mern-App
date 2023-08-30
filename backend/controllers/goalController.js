const asyncHandler = require('express-async-handler')


// @desc Get goals
//@route GET /api/goals
//@access Private
const getGoals =asyncHandler (async(req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc Set goal
//@route POST /api/goals
//@access Private
const setGoals =asyncHandler (async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
    console.log(req.body)
})

// @desc Update goal
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Update goal'})
}
)
// @desc delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Delete goal'})
})
    
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}