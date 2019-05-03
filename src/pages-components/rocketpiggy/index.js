import React from 'react'
import withRoot from '../../theme/withRoot'
import Layout from './Layout'
import Banner from './RocketPiggyBanner'
import contentList from './contents'

const RocketPiggyPage = () => {
  return (
    <Layout>
      <Banner content={contentList.bannerContent} />
    </Layout>
  )
}

export default withRoot(RocketPiggyPage)
