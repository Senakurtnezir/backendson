var mongoose=require("mongoose");
var Venue=mongoose.model("venue")//bızım ıcın semayı derleyıp nesne olusturacak.
const createResponse=function(res,status,content){
    res.status(status).json(content);
};

const listVenues=function(req,res){
createResponse(res,200,{"status":"Basarili"});
};

const getVenue= async function(req,res){
    try{
        await Venue.findById(req.params.venueid)
        .exec()
        .then(function(venue){
            createResponse(res,200,venue)
        });//exec asıl ısı yapıyor.
    }catch(error){
        createResponse(res,200,{status: "Boyle bir mekan yok"});
    }
};

const addVenue=function(req,res){
    createResponse(res,200,{"status":"Basarili"});
};

const updateVenue=function(req,res){
    createResponse(res,200,{"status":"Basarili"});
};

const deleteVenue=function(req,res){
    createResponse(res,200,{"status":"Basarili"});
}

module.exports={
    listVenues,
    addVenue,
    updateVenue,
    deleteVenue,
    getVenue
}