var  ob1, ob2;

function isTouching (ob1,ob2) {
    if (ob1.x - ob2.x < ob2.width/4 + ob1.width/4
          && ob2.x - ob1.x < ob2.width/4 + ob1.width/4
          && ob1.y - ob2.y < ob2.height/4 + ob1.height/4
          && ob2.y - ob1.y < ob2.height/4 + ob1.height/4) 
          {
        return true
      }
      else {
        return false
      }
    }