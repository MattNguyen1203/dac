const GET_DATA_DESIGN = `query getDataDesign($language:LanguageCodeEnum!){
    page(id:"cG9zdDozNzI=" idType:ID){
      translation(language:$language){
        id
        design{
          banner{
            background{
              sourceUrl
              altText
            }
            title
            subtitle
          }
          content{
            enhanceBrand{
              title
              description
            }
            packagingDesign{
              title
              description
              image{
                sourceUrl
                altText
              }
            }
            brandIdentity{
              title
              description
              image{
                sourceUrl
                altText
              }
            }
            consultingServices{
              title
              listServices{
                icon{
                  sourceUrl
                  altText
                }
                name
                text
              }
            }
          }
        }
      }
    }
  }`

const GET_META_DESIGN = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDozNzI=") {
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
const SLUG_DESIGN_QUERY =(id)=> `{
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
  GET_DATA_DESIGN,
  GET_META_DESIGN,
  SLUG_DESIGN_QUERY
}