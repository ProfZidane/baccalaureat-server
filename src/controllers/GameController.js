const userModel = require('../models/User');
const fruitModel = require('../models/Play/Fruit');
const occupationModel = require('../models/Play/Occupation');
const townModel = require('../models/Play/Town');
const countryModel = require('../models/Play/Country');
const simpleGameModel = require('../models/Game/SimpleGame');

class Game {

    async classicGame(data) {
        const letter = data.letter;
        const fruitBegin = await fruitModel.find({ name: {$regex: '^' + letter, $options: 'i' }}).exec();
        const occupationBegin = await occupationModel.find({ name: {$regex: '^' + letter, $options: 'i' }}).exec();
        const townBegin = await townModel.find({ name: {$regex: '^' + letter, $options: 'i' }}).exec();
        const countryBegin = await countryModel.find({ name: {$regex: '^' + letter, $options: 'i' }}).exec();

        /* console.log(fruitBegin);
        console.log(occupationBegin);
        console.log(townBegin);
        console.log(countryBegin); */   
        let n_bool = false;
        let nf_bool = false;
        let f_bool = false;
        let o_bool = false;
        let t_bool = false;
        let c_bool = false;
        let score = 0;


        if ((data.data.nameMal[0].toUpperCase() === data.letter.toUpperCase()) && (data.data.nameMal.length > 3)) {
            n_bool = true;
            score += 5;
        }


        if ((data.data.nameFemale[0].toUpperCase() === data.letter.toUpperCase()) && (data.data.nameFemale.length > 3)) {
            nf_bool = true;
            score += 5;
        }


        fruitBegin.forEach(element => {
            if (element.name.toUpperCase() === data.data.fruit.toUpperCase()) {
                console.log('Fruit correspond');
                f_bool = true;
                score += 5;
            } else {
                //console.log('Fruit pas juste');
            }
        });

        countryBegin.forEach(element => {
            if (element.name.toUpperCase() === data.data.country.toUpperCase()) {
                console.log('Pays correspond !');
                c_bool = true;
                score += 5;
            } else {
                //console.log('Pays non juste');
            }
        });

        townBegin.forEach(element => {
            if (element.name.toUpperCase() === data.data.town.toUpperCase()) {
                console.log('Ville correspond ! ');
                t_bool = true;
                score += 5;
            } else {
                // console.log("Ville non juste !");
            }
        });

        occupationBegin.forEach(element => {
            const separation = data.data.occupation.toUpperCase()
            const tab = separation.split(' ');

            if (element.name.toUpperCase() === tab[0]) {
                console.log('Occupation correspond !');
                o_bool = true;
                score += 5;
            } else {
            }
        });


        if (o_bool && t_bool & c_bool && f_bool && nf_bool && n_bool) {
            console.log("Game win !");

            const response = {
                letter: data.letter,
                state: true,
                score: score,
                town : {
                    state: t_bool,
                    data: data.data.town
                },
                country : {
                    state: c_bool,
                    data: data.data.country
                },
                fruit : {
                    state: f_bool,
                    data: data.data.fruit
                },
                occupation: {
                    state: o_bool,
                    data: data.data.occupation
                },
                nameMal : {
                    state: n_bool,
                    data: data.data.nameMal
                },
                nameFemale : {
                    state: nf_bool,
                    data: data.data.nameFemalz
                }
            };

            console.log(response);

            const simpleGame = new simpleGameModel(response);
            const simpleGameSaved = await simpleGame.save();

            if (simpleGameSaved) {
                return simpleGameSaved;
            } else {
                return 1;
            }

        } else {
            const response = {
                letter: data.letter,
                state: false,
                score: score,
                town : {
                    state: t_bool,
                    data: data.data.town
                },
                country : {
                    state: c_bool,
                    data: data.data.country
                },
                fruit : {
                    state: f_bool,
                    data: data.data.fruit
                },
                occupation: {
                    state: o_bool,
                    data: data.data.occupation
                },
                nameMal : {
                    state: n_bool,
                    data: data.data.nameMal
                },
                nameFemale : {
                    state: nf_bool,
                    data: data.data.nameFemale
                }
            };

            console.log(response);

            const simpleGame = new simpleGameModel(response);
            const simpleGameSaved = await simpleGame.save();

            if (simpleGameSaved) {
                return simpleGameSaved;
            } else {
                return 1;
            }
        }

        
        nf_bool = false;
        n_bool = false;
        f_bool = false;
        o_bool = false;
        t_bool = false;
        c_bool = false;
        score = 0;

        //console.log(fruitBegin.includes(data.data.'fruit'));
    }
}


module.exports = Game;