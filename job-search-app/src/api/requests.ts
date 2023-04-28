import axios from 'axios'

export const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'

export const getIndustrys = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/catalogues/`, {
      headers: {
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        // "X-Api-App-Id": "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    const data = response.data
    const industrys = data.map(({ title }: { title: string }) => title)

    return industrys
  } catch (error) {
    console.log((error as Error).message)
  }
}
