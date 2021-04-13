const get = (request: any, response: any) => {
  return response.json({hello: "world"})
}
 

export default { get }