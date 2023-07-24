export function filterLocation(location,data){
    // console.log(location)
    const len= data.length
    var newArr=[]
    // console.log(data,"inside the filtertem function")
    for (var i=0;i<len;i++){
        if((data[i].location.address).includes(location)){
            newArr.push(data[i])
        }
    }
return(newArr)
}

export function filterterm(term,data,location,url){
    if (! data  ){return data}
    term=term.toUpperCase();
    var termArr=[]
    var len =data.length;

    if (url==="/"){
    for (var i=0;i<len;i++){
        if((data[i].location.address).includes(location)){
        if((data[i].name.toUpperCase()).includes(term) || (data[i].cuisines.toUpperCase()).includes(term) ){
            // console.log(data[i].name,"name",data[i].cuisines,"cuisine")
            termArr.push(data[i])
        }
    }
    }}
    if (url ==="/food"){
        for (var i=0;i<len;i++){
            if( ((data[i].food_name).toUpperCase()).includes(term) || ((data[i].cuisine).toUpperCase()).includes(term)){
                termArr.push(data[i])
            }
        }

    }


    return (termArr)
}

