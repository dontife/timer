const args = process.argv.slice(2); 
const arrOfNum = [];
args.forEach(str => arrOfNum.push(Number(str)));
arrOfNum.sort((a,b) => a - b)

console.log(arrOfNum);

for (let contentArr of arrOfNum){
  let timer = contentArr;
  // if 0 break
  if(!arrOfNum.length) break;
  else if(contentArr > 0 && typeof contentArr === 'number') {
    
    setTimeout(() => {
      process.stdout.write('\x07');
      }, timer * 1000)
  }   
}