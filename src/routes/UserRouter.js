const router = require('express').Router();
const userClass = require('../controllers/UserController');
const userController = new userClass();

router.post('/register', async (req,res,next) => {
    const userRegister = await userController.Register(req.body);

    if (userRegister === 0) {
        res.status(400).send({ message: "Cet utilisateur existe déjà"});
    } else if (userRegister === 1) {
        res.status(400).send({ message: "Une erreur est survenue lors de la sauvegarde !"});
    } else {
        res.status(200).send({ data: userRegister });
    }
});


router.post('/login', async (req,res,next) => {
    const userLogin = await userController.Login(req.body);

    if (userLogin === 0) {
        res.status(400).send({ message: "Adresse email n'existe pas !"});
    } else if (userLogin === 1) {
        res.status(400).send({ message: "Mot de passe est incorrect !"});
    } else {
        res.status(200).send({ data: userLogin });
    }
});


router.get('/get-all', async (req,res,next) => {
    const users = await userController.Get();
    res.status(200).send({ data: users });
});


router.get('/get-user-by-Id/:id', async (req,res,next) => {
    const user = await userController.Get(req.params.id);
    res.status(200).send({ data: user });
});


router.get('/test', (req,res) => {
    res.render('axe');
});

module.exports = router;