import axios from "axios";

export async function fetchData() {
    try {
      const response = await axios.get('http://localhost:6969');
      const data = response.data;
      
      const cityList=Citylisting(data);
      // console.log(cityList,"City inside the fetching.js");
      const result={data,cityList}
      return result
    }
    catch (error) { 
      console.error(error);
    }
    return null
  }

  function Citylisting(data){
    if (data === null){
        return(null)
    }
    else {
        var i=0
        var arr=[];
        // var cuisine="";
    var len=data.length;
    for (i=0;i<len;i++){
      // cuisine=cuisine +data[i].cuisines
      if(!(arr.includes(data[i].location.city))){
        (arr.push(data[i].location.city))
      }
        }
        arr.sort()
    //  console.log(cuisine,"inside fetching.js")
    
    }
    return arr;
}


  