var express= require("express");//require javadakı ımport ıle aynı ıslemı yapıyor.
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComments=require("../controllers/CommentController");

router
.route("/venues")
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);//en son bıten zıncırın sonuna noktalı vırgul konulur.

router
.route("/venues/:venueid")//iki nokta kullanarak dınamık bır ıd olusturduk.
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);

router
.route("/venues/:venueid/comments")
.post(ctrlComments.addComment);

router
.route("/venues/:venueid/comments/:commentid")
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment)
.delete(ctrlComments.deleteComment);

module.exports=router;//bu rotaları uygulamamıza gorunmesını saglar(exports ıfadesıyle).



