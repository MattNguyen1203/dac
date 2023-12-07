const GET_DATA_TECHNOLOGY_OFFSET = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzA="){
		translation(language:$language){
      id
      slug
      technology_common{
      banner{
        background{
          sourceUrl
          altText
        }
        title
      }
      content{
        titlePage
        introduce{
          heading
          description
        }
        system{
          title
          description
          gallery{
            sourceUrl
            altText
          }
        }
        mainContent{
          heading
          description
          listContent{
            icon{
              sourceUrl
              altText
            }
            text
          }
          image{
            sourceUrl
            altText
          }
        }
      }
    }
    }
  }
}`

const GET_DATA_TECHNOLOGY_FLEXO = `query getDataPageFlexo($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzI="){
		translation(language:$language){
      id
      slug
      technology_common{
      banner{
        background{
          sourceUrl
          altText
        }
        title
      }
      content{
        titlePage
        introduce{
          heading
          description
        }
        system{
          title
          description
          gallery{
            sourceUrl
            altText
          }
        }
        mainContent{
          heading
          description
          listContent{
            icon{
              sourceUrl
              altText
            }
            text
          }
          image{
            sourceUrl
            altText
          }
        }
      }
    }
    }
  }
}`

const GET_DATA_TECHNOLOGY_GRAVURE = `
query getDataPageGravure($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzY="){
		translation(language:$language){
      id
      slug
      technology_common{
      banner{
        background{
          sourceUrl
          altText
        }
        title
      }
      content{
        titlePage
        introduce{
          heading
          description
        }
        system{
          title
          description
          gallery{
            sourceUrl
            altText
          }
        }
        mainContent{
          heading
          description
          listContent{
            icon{
              sourceUrl
              altText
            }
            text
          }
          image{
            sourceUrl
            altText
          }
        }
      }
    }
    }
  }
}`

const GET_DATA_TECHNOLOGY_DIGITAL = `
query getDataPageDigital($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1NDI="){
		translation(language:$language){
      id
      slug
      technology_common{
      banner{
        background{
          sourceUrl
          altText
        }
        title
      }
      content{
        titlePage
        introduce{
          heading
          description
        }
        system{
          title
          description
          gallery{
            sourceUrl
            altText
          }
        }
        mainContent{
          heading
          description
          listContent{
            icon{
              sourceUrl
              altText
            }
            text
          }
          image{
            sourceUrl
            altText
          }
        }
      }
    }
    }
  }
}`

const GET_DATA_TECHNOLOGY_OTHERPRINT = `query getDataPageOtherPrint($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1NDQ="){
		translation(language:$language){
      id
      slug
      technology_otherPrinting{
        banner{
          background{
            sourceUrl
            altText
          }
          title
        }
        content{
          titlepage
          introduce{
            heading
            description
          }
          
          solutions{
            title
            image{
              sourceUrl
              altText
            }
            listSolution{
              icon{
                sourceUrl
                altText
              }
              solution
            }
          }
          mainContent{
            heading
            description
            listContent{
              icon{
                sourceUrl
                altText
              }
              text
            }
            subContent
          }
        }
      }
    }
  }
}`

const GET_SLUG_OFFSET = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzA="){
		translation(language:$language){
      slug
      technology_common{
      content{
        titlePage
      }
    	}
    }
  }
}`
const GET_SLUG_FLEXO = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzI="){
		translation(language:$language){
      slug
      technology_common{
      content{
        titlePage
      }
    	}
    }
  }
}`
const GET_SLUG_GRAVURE = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1MzY="){
		translation(language:$language){
      slug
      technology_common{
      content{
        titlePage
      }
    	}
    }
  }
}`
const GET_SLUG_DIGITAL = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1NDI="){
		translation(language:$language){
      slug
      technology_common{
      content{
        titlePage
      }
    	}
    }
  }
}`
const GET_SLUG_OTHERPRINT = `query getDataPageOffset($language :LanguageCodeEnum!){
  page(id:"cG9zdDo1NDQ="){
		translation(language:$language){
      slug
      technology_otherPrinting{
        content{
          titlepage
        }
    	}
    }
  }
}`
const SLUG_TECH_PAGE_QUERY =(id)=> `{
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
  GET_DATA_TECHNOLOGY_DIGITAL,
  GET_DATA_TECHNOLOGY_GRAVURE,
  GET_DATA_TECHNOLOGY_OTHERPRINT,
  GET_DATA_TECHNOLOGY_OFFSET,
  GET_DATA_TECHNOLOGY_FLEXO,
  GET_SLUG_OFFSET,
  GET_SLUG_FLEXO,
  GET_SLUG_GRAVURE,
  GET_SLUG_DIGITAL,
  GET_SLUG_OTHERPRINT,
  SLUG_TECH_PAGE_QUERY
}