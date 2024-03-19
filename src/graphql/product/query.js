import { gql } from '@apollo/client'
const GET_DATA_PRODUCT_PAGE = `query getDataProductPage($language: LanguageCodeEnum!){
  page(id:"cG9zdDo0ODU="){
    translation(language:$language){
      id
      product{
        banner{
          background{
            sourceUrl
            altText
          }
        }
        content{
          heading
          description
        }
      }
    }
  }
}
`
const GET_DATA_CATEGORY_PRODUCT_SERVICE = `
query getDataCategoryProduct($language: LanguageCodeFilterEnum!) {
  allCategoryProducts(
    first: 100
    where: {language: $language, order: ASC, orderby: TERM_ORDER}
  ) {
    nodes {
      slug
      product_category {
        info {
          title
          featureProduct
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}`

const GET_DATA_PRODUCT_DETAIL = `query getDataProduct_detail($language: LanguageCodeEnum!, $slug: ID!) {
  serviceProduct(id: $slug, idType: SLUG) {
    translation(language: $language) {
      id
      categoryProducts{
        nodes{
          id
          name
        }
      }
      product_detail{
        heading
        title
        aboutProduct{
          name
          description
        }
        listImages{
          image{
            sourceUrl
            altText
          }
        }
      }
    }
  }
}`

const SUBTITLE_PRODUCT_QUERY =  `query getDataCategoryProduct($language: LanguageCodeFilterEnum!, $termTaxonomId:[ID!]) {
  allCategoryProducts(where: {language: $language, termTaxonomId: $termTaxonomId}) {
    nodes {
      product_category {
        info {
          subTitle
        }
      }
    }
  }
}`


const GET_SLUG_FIRST_PRODUCT = `query ($language: LanguageCodeEnum!,$term:[String!]) {
  allServiceProduct(
    where: {taxQuery: {taxArray: {taxonomy: CATEGORYPRODUCTS, field: SLUG, operator: IN, terms: $term}}, orderby: {field: DATE, order: DESC}}
    first: 1
  ) {
    nodes {
      translation(language: $language) {
        slug
        id
        title
      }
    }
  }
}`

const OTHER_PRODUCT_QUERY = `query ($taxonomyId: [ID!]) {
  allCategoryProducts(where: {termTaxonomId: $taxonomyId}) {
    nodes {
      serviceProduct(first: 100) {
        nodes {
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
}`
const META_PRODUCT_DETAIL_QUERY = `query($slug:ID!, $language:LanguageCodeEnum!){
 	serviceProduct(id:$slug,idType:SLUG){
    translation(language:$language){
      seo{
        title
        fullHead
        metaDesc
      }
      featuredImage{
        node{
          sourceUrl
          altText
        }
      }
    }
  }
}`

const META_SERVICE_PRODUCT_QUERY = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDo0ODM=") {
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
const SLUG_PRODUCT_QUERY =(id)=> `{
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

const SLUG_PRODUCT_DETAIL_QUERY =(id)=> `{
  serviceProduct(id: "${id}", idType: ID) {
    language {
      code
    }
    slug
    translations {
      language {
        code
      }
      slug
    }
  }
}`

const SLUG_CATE_QUERY = `query getSlugCate($language: LanguageCodeFilterEnum!) {
  allCategoryProducts(where: {language: $language, order: ASC, orderby: TERM_ID}) {
    nodes {
      id
      slug
    }
  }
}`

const SLUG_FEATURE_PRODUCT_QUERY = `query getFeatureProduct($language: LanguageCodeFilterEnum!,$term:[String!]) {
  allServiceProduct(
    first: 1
    where: {language: $language, orderby: {field: DATE, order: DESC}, taxQuery: {taxArray: {field: SLUG, taxonomy: CATEGORYPRODUCTS, terms: $term, operator: IN}}}
  ) {
    nodes {
      slug
    }
  }
}`

const PRODUCT_SEARCH_INPUT_QUERY = gql`query getDataSearchProduct(
  $language:LanguageCodeFilterEnum!,
  $text:String!, 
  $offset:Int!, 
  $size:Int!,
  $term: [String!]
){
  allServiceProduct(
    where:{
      language:$language,
      search:$text,
      offsetPagination:{
        size:$size,
        offset:$offset
      },
      orderby:{
        field:DATE,
        order:DESC
      },
      taxQuery:{
        taxArray:{
          field:SLUG,
          operator:IN,
          taxonomy:CATEGORYPRODUCTS,
          terms:$term
        }
      }
    }
  ){
    nodes{
      featuredImage{
        node{
          sourceUrl
          altText
        }
      }
      slug
      title
    }
  }
}`
export {
  GET_DATA_PRODUCT_PAGE,
  GET_DATA_CATEGORY_PRODUCT_SERVICE,
  GET_DATA_PRODUCT_DETAIL,
  GET_SLUG_FIRST_PRODUCT,
  META_PRODUCT_DETAIL_QUERY,
  META_SERVICE_PRODUCT_QUERY,
  OTHER_PRODUCT_QUERY,
  SUBTITLE_PRODUCT_QUERY,
  SLUG_PRODUCT_QUERY,
  SLUG_PRODUCT_DETAIL_QUERY,
  SLUG_CATE_QUERY,
  SLUG_FEATURE_PRODUCT_QUERY,
  PRODUCT_SEARCH_INPUT_QUERY
}