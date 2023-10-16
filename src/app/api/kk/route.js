//1


//2

export async function POST(res){
    const {city,age} = await res.json()
    return Response.json({
                           'city': city,
                           'age' : age
                                        })
}