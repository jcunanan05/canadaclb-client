import React from 'react'
import Layout from '../../../../components/Layout'
import Navbar from '../../../../components/Navbar'
import NavbarItem from '../../../../components/Navbar/NavbarItem'
import NavbarItemButtonContainer from '../../../../components/Navbar/NavbarItemButtonContainer'
import SEO from '../../../../components/Seo'
import logo from '../../../../images/educavenir/impot-expert-logo.png'

const ImpotexpertLayout = ({ children, seoContent, seoTitle }) => {
  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoContent}
        lang="fr"
        keywords={['reee', 'éducation', 'educavenir']}
      />
      <Navbar
        navbarBrand={
          <NavbarItem
            isLinkWillOpenInNewWindow={true}
            text={<img src={logo} alt="ImpotExpertREEE" />}
            href="https://www.impotexpert.ca/?ref=ssorg"
          />
        }
        navbarEnd={
          <NavbarItemButtonContainer>
            <a className="button is-info" href="#appliquer">
              <strong>Appliquer</strong>
            </a>
          </NavbarItemButtonContainer>
        }
      />
      <main>{children}</main>
    </Layout>
  )
}

export default ImpotexpertLayout
