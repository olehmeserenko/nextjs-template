export async function GET(request: Request) {
  console.info(request)
  return new Response('Hello, Next.js!')
}
