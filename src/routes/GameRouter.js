const router = require('express').Router();
const gameClass = require('../controllers/GameController');
const gameController = new gameClass();


router.get('/simple-game', async (req,res,next) => {
    const data = {
        letter: 'A',
        data : {
            nameMal: 'Aike',
            nameFemale: 'adia',
            town: 'Abidjan',
            country: 'Argentine',
            fruit: 'Ananas',
            occupation: 'Animateur télé'
        }
    };
    await gameController.classicGame(data);
});


module.exports = router;