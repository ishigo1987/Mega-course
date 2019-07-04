module.exports = ()=>{
  return new Promise((resolve)=>{
    console.log("test un deux")
    navigator.screenshot.save((error,res)=>{
     if(error){
       console.error(error);
     }else{
       console.log('ok',res.filePath);
       resolve({path:res.filepath});
     }
    },'jpg',100,'megaCourse');
  });
};