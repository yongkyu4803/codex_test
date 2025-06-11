import { useEffect } from 'react'

export default function ClientPage() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.replace('/client.html')
  }, [])
  return null
}
