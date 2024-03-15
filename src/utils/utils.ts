export const fetchData = async (url: string) => {
    try{
      const req = await fetch(url)
      const data = await req.json()
      return data
    }catch{
      console.error("Error fetching the data")
    }
  }

  export const fetchArticle = async (id:string) => {
    try{
      const req = await fetch(`https://itchy-famous-squares-carlosppretelin.replit.app/article/?id=${id}`)
      const data = await req.json()
      return data
    }catch{
      console.error("Error fetching the data")
    }
  }