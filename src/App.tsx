import { useEffect } from 'react'
import SDK from '@uphold/uphold-sdk-javascript'

import './App.css'

const sdk = new SDK({
  baseUrl: process.env.REACT_APP_UPHOLD_BASE_URL,
  clientId: process.env.REACT_APP_UPHOLD_CLIENT_ID!,
  clientSecret: process.env.REACT_APP_UPHOLD_CLIENT_SECRET!,
})

const App = () => {
  const getData = async () => {
    try {
      const data = await sdk.getTicker()

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <p>Hi there</p>
    </div>
  )
}

export default App
