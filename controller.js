const fs = require("fs")

const saveUserEmail = async (req, res) => {

    const data = req.body.name

    if (!data) {
        return res.status(400).send({ success: false, data: "No email provided" })
    }

    fs.appendFile('user-names.txt', data + "\n", (err) => {
        if (err) {
            return res.status(500).send({ success: false, data: err.message })
        }

        res.status(200).send({ success: true, data })
    })

};


module.exports = {
    saveUserEmail
}
