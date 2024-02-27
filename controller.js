const houses = require('./db.json');
const globalID  = 4;

module.exports = {
    //  Getting Houses / GET Responses
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    // Creating New Houses / POST Responses
    createHouse: (req, res) =>{
        const { address, price, imageURL } = req.body;

        const houseObj = {
            id: globalID,
            address,
            price,
            imageURL
        }

        houses.push(houseObj);
        res.status(200).send(houses);
        globalID++;
    },

    // Deleting Houses
    deleteHouses: (req, res) =>{
        const { deleteId } = req.params;
        // for(let i = 0; i < houses.length; i++){
        //     if(houses[i].id === Number(deleteId)){
        //         houses.splice(i, 1);
        //         res.status(200).send(houses);
        //     }
        // }

        const index = houses.findIndex(house => house.id === Number(deleteId));
        houses.splice(index, 1);
        res.status(200).send(houses);
    },

    // Updating prices / PUT responses

    upadtePrice: (req, res) =>{
        const { updateId } = req.params;
        const { type } = req.body;
        for (let i = 0; i < houses.length; i++){
            if(houses[i].id === Number(updateId)){

                if( type === 'plus'){
                    const newPrice = Number(houses[i].price) + 1000;
                    houses[i].price = newPrice;
                    res.status(200).send(houses);
                    return;
                }
                if( type === 'minus'){
                    const newPrice = Number(houses[i].price) - 10000;
                    houses[i].price = newPrice;
                    res.status(200).send(houses);
                    return;
                }

            }
        }
    }

}