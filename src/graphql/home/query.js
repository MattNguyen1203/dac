const GET_DATA_HOMEPAGE = `
    query($language : LanguageCodeEnum!){
    page(id:"cG9zdDoyMQ=="){
    translation(language:$language){
      homepage{
        banner{
          slogan
          textfeature
          gallerybox{
            sourceUrl
            altText
          }
        }
        designSuccess{
          heading
          aboutCompany{
            title
            description
          }
          textAnimation{
            textOnTop
            listTextScroll{
              text
            }
            description
            image{
              sourceUrl
            }
          }
        }
        productAndService{
          contentLeft{
            title
            description
          }
          
        }
        technology{
          heading{
            heading1
            heading2
          }
          description
          listTechnology{
            icon{
              sourceUrl
            }
            technologyName
            description
          }
        }
        solution{
          thumbnail{
            sourceUrl
          }
          title
          listSolution
          description
          seemore
        }
        news{
            heading
            image{
                sourceUrl
            }
        }
        slideVideo{
          background{
            sourceUrl
          }
          videoLink
        }
        partners{
          title
          subtitle
          heading
          listPartners{
            image{
              sourceUrl
            }
          }
          socialAction{
            phone
            zalo
            facebook
            linkedin
          }
        }
      }
    }
  }
}
`

const GET_DATA_HEADER = `
    query($language : LanguageCodeEnum!){
        page(id:"cG9zdDoyMQ=="){
            translation(language:$language){
            homepage{
                header{
                  nav{
                      name
                  }
                }
              }
            }
        }
    }
`

const GET_DATA_FOOTER = `
query($language : LanguageCodeEnum!){
    page(id:"cG9zdDoyMQ=="){
    translation(language:$language){
      homepage{
         footer{
          logo{
           	sourceUrl
            altText
          }
          contentColumn1
          contentColumn2
          copyrightAndPolicy{
            copyright
            policy{
              text
            }
          }
      	}
      }
    }
  }
}
`
const DATA_SOCIAL_FOOTER = `query($language : LanguageCodeEnum!){
  page(id:"cG9zdDoyMQ=="){
  translation(language:$language){
    homepage{
      partners{
        socialAction{
          phone
          zalo
          facebook
          linkedin
        }
      }
    }
  }
}
}`
const GET_DATA_MOBILE_JOURNEY = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNjg=") {
    translation(language: $language) {
      slug
      journey {
        banner {
          titlePage
        }
      }
    }
  }
}`

const GET_DATA_MOBILE_PRIZE = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzQ=") {
    translation(language: $language) {
      slug
      prize {
        titlePage
      }
    }
  }
}`

const GET_DATA_MOBILE_ORGANIZE = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzY=") {
    translation(language: $language) {
      slug
      organize {
        titlePage
      }  
    }
  }
}`

const GET_DATA_MOBILE_VISION = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzk=") {
    translation(language: $language) {
      slug
      vision {
        tilePage
      }
    }
  }
}`

const GET_META_HOME = `query($language: LanguageCodeEnum!){
  page(id: "cG9zdDoyNA==") {
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

const GET_NEWS_HOMEPAGE = `query getNewsHomepage($language: LanguageCodeFilterEnum!) {
  posts(
    first: 4
    where: {language: $language, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      title
      excerpt
      slug
      categories{
        nodes{
          slug
        }
      }
    }
  }
}`

const POLICY_QUERY = `query($language:LanguageCodeEnum!){
  page(id:"cG9zdDoyMjE1"){
    translation(language:$language){
      slug
    }
  }
}`

const TERM_CONDITION_QUERY = `query($language:LanguageCodeEnum!){
  page(id:"cG9zdDoyMjUy"){
    translation(language:$language){
      id
      slug
    }
  }
}`

const COOKIE_QUERY = `query($language:LanguageCodeEnum!){
  page(id:"cG9zdDoyMjU2"){
    translation(language:$language){
      id
      slug
    }
  }
}`
export {
  GET_DATA_HEADER,
  GET_DATA_FOOTER,
  GET_DATA_HOMEPAGE,
  GET_DATA_MOBILE_JOURNEY,
  GET_DATA_MOBILE_PRIZE,
  GET_DATA_MOBILE_ORGANIZE,
  GET_DATA_MOBILE_VISION,
  GET_META_HOME,
  GET_NEWS_HOMEPAGE,
  DATA_SOCIAL_FOOTER,
  POLICY_QUERY,
  TERM_CONDITION_QUERY,
  COOKIE_QUERY
}