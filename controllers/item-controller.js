const axios = require('axios');

const getItems = async(req, res, next) => {
    let status;
    try {
        const config = {
            method: 'get',
            url: 'http://ws.neko.com.tr/api/amazon/categories',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer PzA_B3wabNHTil3YuT-HR5HTGjF3EB5jwl65deGMEnt3mFMOr-EGyLVTTc1p4k3CBDLN-20Mw44YWp_84FnsKAoPS_dFcbh3DkAibeNNMtjJOa6QYrlSTfREXY7GRC4sRRPfl2UTuzkTXBmgUz_oCwBReDQvQcnVTt-5GxW0LoLKW5gLaEVyeorhSrzLVQhEetxRNRL-jPgurUagFEDi9fOC8lDyXm-VjCGZ5xpSyqE3ayU-7p9l7VqR-xUCVrrP'
            }
        };
        const res = await axios(config)
        status = res.status;
    }
    catch (err){
        const error = err;
        const message = (err.response.data.Message);
        return  res.status(500).json({FatalError:message || error});
    }
    res.status(200).json({status:status});
}

module.exports = {
    getItems
}