var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına baglandı\n");
});
mongoose.connection.on("error",function(){
    console.log("baglantı saglanamadı");
});
mongoose.connection.on("disconnected",function(){
    console.log("baglantı kesıldı");
});

process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("baglantı kapatıldı");
    process.exit(0);

});
require("./venue");