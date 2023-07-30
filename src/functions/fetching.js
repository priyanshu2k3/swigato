import axios from "axios";

export async function fetchData() {
  var cityList=[]
    try {
      const response = await axios.get('http://localhost:6969/restaurant');

      const data = response.data;
      // console.log(data)      
      cityList=Citylisting(data);
      // console.log(cityList,"City inside the fetching.js");
      const result={data,cityList}
      return (result)
    }
    catch (error) { 
      console.error(error);
    }
    return null
  }

  

  function Citylisting(data){
    var arr=[];
    if (data === null){
        return([])
    }
    else {
        var i=0
        
    var len=data.length;
    for (i=0;i<len;i++){
      if(!(arr.includes(data[i].location.city))){
        (arr.push(data[i].location.city))
      }
        }
        arr.sort()
    
    }
    return arr;
}


export async function fetchMenu() {
  try {
    var resdata
    await axios.get('http://localhost:6969/food')
    .then((res)=>{ resdata=res.data})
    return(resdata.data)
  }
  catch (error) { 
    console.error(error);
  }
  return null
}


  