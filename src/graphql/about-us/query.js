import { gql } from '@apollo/client'
const GET_DATA_ABOUT_US_VISION = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzk=") {
    translation(language: $language) {
      id
      slug
      vision {
        banner {
          imagebanner {
            sourceUrl
            altText
          }
          textbanner
        }
        tilePage
        story {
          heading
          descriptionHeading
          image {
            sourceUrl
            altText
          }
          subdescription1
          subdescription2
        }
        motto{
          heading
          listMotto{
            icon{
              sourceUrl
              altText
            }
            description
          }
        }
      }
    }
  }
}
`

const GET_DATA_ABOUT_US_JOURNEY = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxNjg=") {
      translation(language: $language) {
        id
        slug
        journey {
          banner {
            imagebanner {
              sourceUrl
              altText
            }
            textbanner
            titlePage
          }
          content {
            title
            description
            journey {
              img {
                sourceUrl
                altText
              }
              text
              year
            }
            subdescription
            subImage {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }`

const GET_DATA_ABOUT_US_PRIZE = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzQ=") {
    translation(language: $language) {
      id
      slug
      prize {
        banner {
          imagebanner {
            sourceUrl
            altText
          }
          textbanner
        }
        titlePage
        content{
          heading
          listPrize{
            image{
              sourceUrl
              altText
            }
            name
            description
          }
        }
      }
    }
  }
}`

const GET_DATA_ABOUT_US_ORGANIZE = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxNzY=") {
      translation(language: $language) {
        id
        slug
        organize {
          banner{
            imageBanner{
              sourceUrl
              altText
            }
            textBanner
          }
          titlePage
          content{
            heading
            diagram{
              sourceUrl
              altText
            }
            summary{
              text
            }
          }
        }  
      }
    }
  }`

  const META_VISION_QUERY = `query($language: LanguageCodeEnum!){
    page(id: "cG9zdDoxNDE=") {
      translation(language:$language){
        seo{
        title
        fullHead
        metaDesc
        }
         featuredImage{
        node{
          altText
          sourceUrl
        }
      }
      }
    }
  }`
  const META_JOURNEY_QUERY = `query($language: LanguageCodeEnum!){
    page(id: "cG9zdDoxNzA=") {
      translation(language:$language){
        seo{
        title
        fullHead
        metaDesc
        }
         featuredImage{
        node{
          altText
          sourceUrl
        }
      }
      }
    }
  }`
  const META_PRIZE_QUERY = `query($language: LanguageCodeEnum!){
    page(id: "cG9zdDoxNzQ=") {
      translation(language:$language){
        seo{
        title
        fullHead
        metaDesc
        }
         featuredImage{
        node{
          altText
          sourceUrl
        }
      }
      }
    }
  }`
  const META_ORGANIZE_QUERY = `query($language: LanguageCodeEnum!){
    page(id: "cG9zdDoxNzY=") {
      translation(language:$language){
        seo{
        title
        fullHead
        metaDesc
        }
         featuredImage{
        node{
          altText
          sourceUrl
        }
      }
      }
    }
  }`

const SLUG_VISION_QUERY = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzk=") {
    translation(language: $language) {
      slug
      vision {
        tilePage
      }
    }
  }
}`
const SLUG_JOURNEY_QUERY = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNjg=") {
    translation(language: $language) {
      slug
      journey {
        banner{
          titlePage
        }
      }
    }
  }
}`
const SLUG_PRIZE_QUERY = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzI=") {
    translation(language: $language) {
      slug
      prize {
        titlePage
      }
    }
  }
}`
const SLUG_ORGANIZE_QUERY = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzY=") {
    translation(language: $language) {
      slug
      organize {
        titlePage
      }
    }
  }
}`

const SLUG_VISION_PAGE_QUERY =(id)=> `{
  page(id:"${id}"){
    language{
      code
    }
    slug
    translations{
      language{
        code
      }
      slug
    }
  }
}`
export {
    GET_DATA_ABOUT_US_JOURNEY,
    GET_DATA_ABOUT_US_ORGANIZE,
    GET_DATA_ABOUT_US_VISION,
    GET_DATA_ABOUT_US_PRIZE,
    META_ORGANIZE_QUERY,
    META_JOURNEY_QUERY,
    META_PRIZE_QUERY,
    META_VISION_QUERY,
    SLUG_JOURNEY_QUERY,
    SLUG_ORGANIZE_QUERY,
    SLUG_PRIZE_QUERY,
    SLUG_VISION_QUERY,
    SLUG_VISION_PAGE_QUERY
}