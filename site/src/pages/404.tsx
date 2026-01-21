import * as React from "react"
import Link from "next/link"
import Button from "../components/Atoms/button"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <Seo title="The Void - Visual Media and Experience Designer" />
    <Layout>
      <div className="404-p text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link href="/">
          <Button
            title="Return Home"
            colorClass="text-white bg-gradient-to-r from-pink to-purple"
            marginClass="mt-5"
          ></Button>
        </Link>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
