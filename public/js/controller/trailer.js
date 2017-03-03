var trailerScheama=new mongoose.schema({
  title:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true
  }
});

module.exports=trailerScheama;
