import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface MessageResponse {
  messages: string[];
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [messages, setMessages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const response: AxiosResponse<MessageResponse> = await axios.get('http://localhost:8000/api')
      setMessages(response.data.messages)
      setError(null) // エラーをリセット
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('メッセージの取得中にエラーが発生しました。')
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          fetchData()
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App