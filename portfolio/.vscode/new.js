arr=[{name:'raki',age:20},{name:'ak',age:22}]
obj={}
arr.map((e)=>
    {
        if(!(e.age in obj))
           {
           obj[e.age]=[]
    }
        obj.push(e)
});
console.log(obj)