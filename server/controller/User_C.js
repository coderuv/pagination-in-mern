

const user_model = require("../model/user_model");

 exports.defaultlimit = async(req, res)=>{
  
  let item_list =  await user_model.find().limit(3);
 // console.log(item_list);
  if(item_list.length==0){
    res.send({msg:'nodata'});

  }else{
    res.send({msg:item_list});
  }
 }
exports.onlimit = async (req, res)=> {
             
             
                //  var pageNo = parseInt(req.body.pageNo)
                var size = parseInt(req.body.size)
                let item_list =  await user_model.find().limit(size);
               // console.log(item_list);
                if(item_list.length==0){
                  res.send({msg:'nodata'});

                }else{
                  res.send({msg:item_list,limit:size});
                }

}


exports.totalcount = async (req, res) =>{

  let item_list =  await user_model.find();
  var arr=[];
  c =0;
  do{
    c=c+3;
     arr.push(c);

  }while(c<item_list.length)

  var pageval =[];
  for(var i =1;i<=item_list.length;i++){
   
    pageval.push(i);
  
    

  }

  res.send({msg:item_list.length,selectdata:arr,pagevalue:pageval});

}
exports.goto = (req, res) =>{}

exports.update_email = async (req,res)=>{

console.log(req.body);
var data = {
                  
  email: req.body.email,
  };

  user_model.findByIdAndUpdate(req.body._id,data, { new: true }, async function(err, newdata) {
    if (err) {
      console.log("err", err);
      res.status(200).send({msg:'error'});
    } else {
      console.log("success");
      let item_list =  await user_model.find().limit(3);
      res.send({msg: item_list});
    }
  });



}


exports.pagination = async  function(req,res){
   if(req.body.id=="prev"){
    console.log(req.body);
    var length = parseInt(req.body.length);
  

    let item_list =  await user_model.find ().sort({_id:-1}).skip(length-1);
    console.log(length);
    res.send({msg:item_list});

   }else
    if(req.body.id=="next"){
   console.log(req.body);
    //var no1 = parseInt(req.body.id);
    var length = parseInt(req.body.length);
  

    let item_list =  await user_model.find ().sort({_id:1}).skip(length-1);
    console.log(length);
    res.send({msg:item_list});

   }else{

      var no1 = parseInt(req.body.id);
      // var length = parseInt(req.body.length);
    

      let item_list =  await user_model.find ().sort({_id:1}).skip(no1).limit(3);
      console.log(item_list.length);
      res.send({msg:item_list});



   }
  
  // let totallength = item_list.length;
  // let noofpage= 
}






