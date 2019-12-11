"use strict";

var/*static class*/FILEMANAGER = {
  list:[],
  filelist:null,
  index:-1,
};
FILEMANAGER.setFileList=function(t)
{
  FILEMANAGER.filelist = t.files;
}

FILEMANAGER.process = function()
{
  var f=FILEMANAGER;
  var file=null;
  var struct;
  if(f.filelist && f.filelist.length > 0 && f.index + 1 < f.filelist.length){
    file = f.filelist[++f.index];
  }
  if (!file){
    console. 
    log(  "Error in file processing:",
      {
        file:file,
      },
    );
  }
  else
  {
    struct = {
      name:file.name,
      type:file.type,
      url:null,
      text:null,
      file:file,
      loaded:false,
    };
    f.list = f.list.concat(struct);
  }
  if(!file){}
  else if(file.type.includes("image\/")||file.type.includes("video\/"))
  {
      //.match(/image\/.*/))
      //.match(/video\/.*/))
      struct.url = URL.createObjectURL(file);
      struct.loaded = true;
  }
  else if(file.type==""||file.type.includes("text\/"))
  {
    var reader=new Worker("file.worker.js");
    reader.onmessage = function(e){
      struct.text = e.data;
      struct.loaded = true;
    };
    reader.postMessage(file);
  }
  else
  {
    struct.loaded = true;
  }
}
