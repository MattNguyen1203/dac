const POLICY_COOKIE_QUERY = `query($language:LanguageCodeEnum!){
    page(id:"cG9zdDoyMjU2"){
      translation(language:$language){
        id
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
const PRIVACY_POLICY = `query($language:LanguageCodeEnum!){
    page(id:"cG9zdDoyMjE1"){
      translation(language:$language){
        id
        slug
      }
    }
}`
const SLUG_POLICY_QUERY =(id)=> `{
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
  POLICY_COOKIE_QUERY,
  TERM_CONDITION_QUERY,
  PRIVACY_POLICY,
  SLUG_POLICY_QUERY
}