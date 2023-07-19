export function filterLocation(location,data){
    console.log(location)
    const len= data.length
    var newArr=[]
    console.log(data,"inside the filtertem function")
    for (var i=0;i<len;i++){
        if((data[i].location.address).includes(location)){
            newArr.push(data[i])
        }
    }
return(newArr)
}

export function filterterm(term,data){
    var termArr=[]
    var len =data.length;
    for (var i=0;i<len;i++){
        if((data[i].name).includes(term) ||(data[i].cuisines).includes(term) ){
            termArr.push(data[i])
        }
    }


    return (termArr)
}