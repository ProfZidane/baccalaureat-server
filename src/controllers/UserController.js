const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User {

    async Register(data) {

        const userExist = await UserModel.findOne({ email: data.email });

        if (userExist) {
            const password_not_crypt = data.password;
            const password_crypt = await bcrypt.hashSync(password_not_crypt,10);
            data.password = password_crypt;

            console.log(data);
            const user = new UserModel(data);
            const userSaved = await user.save();

            if (userSaved) {
                const token = jwt.sign({ _id: userSaved._id}, process.env.TOKEN_SECRET, { expiresIn: 85000});
                let response = {
                    data : userSaved,
                    token : token
                };

                return response;
            } else {
                return 1;
            }

        } else {
            return 0;
        }

    }



    async Login(data) {
        const userExist = await UserModel.findOne({ email: data.email });

        if (userExist) {

            const passwordVerify = await bcrypt.compare(data.password, userExist.password);

            if (passwordVerify) {
                const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET, { expiresIn: 85000});

                let response = {
                    data : userExist,
                    token : token
                };

                return response;
            } else {
                return 1;
            }

        } else {
            return 0;
        }
    }



    async GetById(id) {
        const userById = await UserModel.findOne({ _id: id });
        return userById;
    }


    async Get() {
        const users = await UserModel.find({ role: "player" });
        return users;
    }
}


module.exports = User;