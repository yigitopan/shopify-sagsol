const axios = require('axios');
const qs = require('qs');
const fs = require('fs');

const getCategories = async(req, res, next) => {
    let token;
    let status;
 
    token = await getToken();
    try {
        const config = {
            method: 'get',
            url: 'http://ws.neko.com.tr/api/amazon/categories',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        const res = await axios(config)
        status = res.status;
        data = res.data;
    }
    catch (err){
        const error = err;
        const message = (err.response.data.Message);
        return  res.status(500).json({Error:error, Message:message || 'no message'});
    }
    console.log("Cekildi")
    res.status(200).json({data:data});
}


const getProducers = async(req, res, next) => {
    let token;
    let status;
 
    token = await getToken();
    try {
        const config = {
            method: 'get',
            url: 'http://ws.neko.com.tr/api/amazon/producers',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        const res = await axios(config)
        status = res.status;
        data = res.data;
    }
    catch (err){
        const error = err;
        const message = (err.response.data.Message);
        return  res.status(500).json({Error:error, Message:message || 'no message'});
    }
    console.log("Cekildi")
    res.status(200).json({data:data, status:status});
}

const getProducts = async(req, res, next) => {
    let token;
    let status;
 
    token = await getToken();
    try {
        const config = {
            method: 'get',
            url: 'http://ws.neko.com.tr/api/amazon/products',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        var obj = {
            products: []
         };

        const res = await axios(config)
        status = res.status;
        data = res.data;
        
        /*
        data.map(data => {
            obj.products.push(data)
        })

        fs.writeFile ("products.json", JSON.stringify(obj,null,'\t'), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
        
        */


    }
    catch (err){
        const error = err;
        const message = (err.response.data.Message);
        return  res.status(500).json({Error:error, Message:message || 'no message'});
    }
    console.log("Cekildi")
    res.status(200).json({data:data});
}

const getPrices = async(req, res, next) => {
    let token;
    let status;
 
    token = await getToken();
    try {
        const config = {
            method: 'get',
            url: 'http://ws.neko.com.tr/api/amazon/prices',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        const res = await axios(config)
        status = res.status;
        data = res.data;
    }
    catch (err){
        const error = err;
        const message = (err.response.data.Message);
        return  res.status(500).json({Error:error, Message:message || 'no message'});
    }
    console.log("Cekildi")
    res.status(200).json({data:data, status:status});
}



const getToken = async(req,res,next) => {
    let token;
    const data = qs.stringify({
        'grant_type': 'password',
        'username': '120.01.6372',
        'password': 'Nk40999950948'
    });
    const config = {
        method: 'post',
        url: 'http://ws.neko.com.tr/token',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    try {
     const res = await axios(config)
     token = res.data.access_token
    }
    catch (err){
        console.log(error);
    }

    return token;
}

module.exports = {
    getCategories, getProducers, getProducts, getPrices
}