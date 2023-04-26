import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Transform any notion page into a live site</h1>
    <p><input defaultValue={'paste the public notion URL here'}></input><button>Go</button></p>
    <p>Make sure your notion site <a href="https://google.com">is public</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
