
const request = require('request');

const getItems = async(req, res, next) => {

    try {
        const options = {
            'method': 'GET',
            'url': 'http://ws.neko.com.tr/api/categories',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'bearer 3MvwzLpm2W_aJR5XIs5tkNHqFhEUagbyLJN51EhwsI_y9kZX-aqUJlirJl5Xmgo72A_EaeeLyhYgqmHCAeuq1wrqBTUAjjdUMxmOBT7RUYaaQ0UNZNTbo1ugwXy4z7T9ULeuioJRYlLjA9SzS0IAY0jBYIPFYg9yAm3PTMtVUenanL5uiognCWi68XjqEns10qlZ0c_zQ4b-78-v89AhSC66ebACRl2r9Y0E9vOC7rfjYqwQe4n0fOrjr_K2Pmf1'
            }
        };
        request(options, function (error, response) {
            console.log(response.body)
            if (error) throw new Error(error);
            console.log(response.body);
        });

    }
    catch (err){
        return next(err);
    }
    res.status(200).json({message:''});
}

module.exports = {
    getItems
}