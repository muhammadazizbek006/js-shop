const movies =  [
    {name:'avatar 3D', year:2008, rating:9},
    {name:'titanik 4D', year:1997, rating:7},
    {name:'forsaj 9 3D', year:2020, rating:4},
    {name:'avengers', year:2012, rating:6},
]
// const newmowies = []
// movies.forEach((e)=>{
//     if(e.yeyar > 2010){
//         newmowies.push(e)
//     }
    
// })

// console.log(newmowies);

const filtermovies = movies.filter((movie)=>{
    return movie.name.includes("3D")
})

console.log(filtermovies);

