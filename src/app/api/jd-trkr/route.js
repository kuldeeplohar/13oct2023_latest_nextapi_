//1 import area


//definataion area
 
 export async function POST(req){
    const {name,last} = await req.json()
    return Response.json({name:name ,last:last})
  }