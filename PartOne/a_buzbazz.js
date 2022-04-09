let count = 0;
while (count <= 100) {
  if(count % 2 === 0 && !(count % 5 === 0)){
    console.log(count , 'buzz');
  }else if(count % 5 === 0){
    console.log(count, 'bazz');
  }else{
    console.log(count);
  }
  count++;
}