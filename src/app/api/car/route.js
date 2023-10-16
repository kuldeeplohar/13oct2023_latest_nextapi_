//1


//2

export async function POST(req){
     
    const {car,prize,} = await req.json()
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('Search_car')
    return Response.json({
                           "Brand":car,
                           "prize": prize,
                           "car Seacrh":`${query}`
                        })
}