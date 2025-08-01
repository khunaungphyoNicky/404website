export default async function handler(req, res) {
  try {
    const response = await fetch('http://103.107.54.158:8888/server/online')
    const text = await response.text()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send(text)
  } catch (err) {
    console.error('Proxy error:', err)
    res.status(500).send('Error contacting the server')
  }
}
