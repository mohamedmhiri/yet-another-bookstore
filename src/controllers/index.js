'use strict'
module.exports = {

    // show the home page
    showHome: (req, res) => {
        res.json({'error': false, 'message': 'Hello World'})
    }

}
