const express = require('express')
const router = express.Router()
const{getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

//goals routes ( which is the same as saying /api/goals)
router.route('/').get(getGoals).post(setGoals)
//router.get('/', getGoals)
//router.post('/', setGoals)


router.route('/:id').put(updateGoals).delete(deleteGoals)
// router.put('/:id', updateGoals )
// router.delete('/:id', deleteGoals)


module.exports = router