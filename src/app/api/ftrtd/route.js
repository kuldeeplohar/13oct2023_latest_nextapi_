//1 import area


//2 defination area
  
export async function POST(req){

    const {city,state,name} = await req.json()
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('Search_name')


    return Response.json({
                           msg: 'hello '+city,   //payload= POST > Body > Row > json
                           state:`hy ${state}`,
                           name:`hyyy ${query}`
                         })
}


//3 export area

//module.exports={post}