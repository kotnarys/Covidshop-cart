import {useState} from "react"

export default function useFetch() {
  const [loader, setLoader] = useState(true)

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch (url)
      .then(response => response.json())
      .then(data => {
        if (!data) {
          setLoader(false)
          reject(data)
        }
        setLoader(false)
        resolve(data)
      })
      .catch(error => {
        setLoader(false)
        reject(error)
      })
    })
  }

  return {get, loader}
}