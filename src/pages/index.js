import {graphql, Link} from "gatsby"
import * as React from "react"
const IndexPage = ({data}) => {
  return (
   <main>
     <h1>{data.file.absolutePath}</h1>
     <Link to="/demo">Hello</Link>
   </main>
  )
}
export const query = graphql`
  query{
   file{
    absolutePath
   }
  }
`
export default IndexPage

