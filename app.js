const movies =  [
    {name:'avatar 3D', yeyar:2008, rating:9},
    {name:'titanik 4D', yeyar:1997, rating:7},
    {name:'forsaj 9 3D', yeyar:2020, rating:4},
    {name:'avengers', yeyar:2012, rating:6},
]
const newmowies = []
movies.forEach((e)=>{
    if(e.yeyar > 2010){
        newmowies.push(e)
    }
    
})

console.log(newmowies);