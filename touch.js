function Touch(o,i){
    if(o.x-i.x<o.width/2+i.width/2 &&
      i.x-o.x<o.width/2+i.width/2 &&
      o.y-i.y<o.height/2+i.height/2 &&
      i.y-o.y<o.height/2+i.height/2){
        return true
    }
    else{
     return false
    }
  }