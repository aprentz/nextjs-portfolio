export async function GET(req, res) {

   return new Response(JSON.stringify({status: "ok"}))
}

export async function POST(req, res) {
    const body = await req.json()
   console.log(body)

   return new Response(JSON.stringify({status: "ok"}))
}