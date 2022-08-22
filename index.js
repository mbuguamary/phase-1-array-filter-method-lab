// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
 
  function findMatching(array,name){
    const matchingDrivers=array.filter(a=>a.toLowerCase().includes(name.toLowerCase()));
    return matchingDrivers;
   
  }

  function fuzzyMatch(array,string){
const length=string.length;
const matchingNames=array.filter(y=>y.slice(0,length)===string);
 return matchingNames;
  }



function matchName(array,NameInput){
const matchingDriversName=array.filter(m=>m.name===NameInput);
return matchingDriversName;
}