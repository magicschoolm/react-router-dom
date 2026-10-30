export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) {
    throw Error("unable to Load user details")
  }
  const data = await res.json()
  console.log(data)
  return data
}
export const userSingleLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (!res.ok) {
    throw Error("user details not forund")
  }
  const data = await res.json()
  console.log(data)
  return data
}

