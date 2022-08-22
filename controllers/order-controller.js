const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: '8gen-dev',
    accessToken: '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'
});

const deleteOrder = async(req, res, next) => {
    let order;
    let customerID;
    const {orderToCancel, orderOwnerID} = req.body;
    try {
        order =  await shopify.order.get(orderToCancel)
        customerID = order.customer.id
        const host = req.get('host');
        console.log(host)

        if (customerID!==orderOwnerID){
            const error = new Error("Customer id doesn't match");
            res.status(500).json({message:'cusID no match'});
            return (error);
        }
        else {
            try {
                await shopify.order.cancel(orderToCancel)
            }
            catch (err) {
                res.status(500).json({message:"couldn't cancel"});
                return next(err);
            }
        }
    }
    catch (err){
        return next(err);
    }
    res.status(200).json({message:'deleted'});
}

module.exports = {
    deleteOrder
}