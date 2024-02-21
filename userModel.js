const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        lastname: {
            type: String
        },
    }
)

const ModelUser = mongoose.model("usuarios", userSchema);
module.exports = ModelUser;