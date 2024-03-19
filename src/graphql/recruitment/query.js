import { gql } from "@apollo/client"

const GET_DATA_RECRUIMENT_DETAIL = `query getDataRecruitmentDetail($slug:ID!,$language:LanguageCodeEnum!){
  jobOpportunity(id: $slug, idType: SLUG) {
    translation(language:$language){
      id
      slug
      recruimentDetail {
      banner {
        background {
          sourceUrl
          altText
        }
        title
        subTitle
      }
      content {
        heading
        description
        dataForm {
          title
          fullName
          email
          address
          dateOfBirth
          attachFile
          button
          telephone
        }
        requestProfile
        subTitle
      }
    }
    }
  }
}`

const GET_DATA_RECRUIMENT_PAGE = `query ($language: LanguageCodeEnum!) {
  page(id:"cG9zdDo2NjU="){
    translation(language: $language){
      id
      recruiment{
        banner{
          background{
            sourceUrl
            altText
          }
          title
          subTitle
        }
        content{
          heading
          description
          listCulture{
            icon{
              sourceUrl
              altText
            }
            title
            description
          }
          subTitle
        }
      }
    }
  }
}`


const GET_ALL_SEARCH_BY_SERVER = (offset = 0, lang = "VI", text = '') => {
  return `{allJobOpportunity(
    where: {language: ${lang} , search: "${text}", offsetPagination: {offset: ${offset}, size: 4}, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      slug
      recruimentDetail {
        infoJob {
          icon {
            sourceUrl
            altText
          }
          nameJob
          listInfoDetail {
            title
            text
          }
          expirationDate
          applyText
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`
}

const GET_DATA_NEW_JOBS = `query getdataJobNew($language: LanguageCodeEnum!) {
  allJobOpportunity(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      translation(language: $language) {
        slug
        recruimentDetail {
          infoJob {
            nameJob
            applyText
            expirationDate
            icon {
              altText
              sourceUrl
            }
            listInfoDetail{
              title
              text
            }
          }
        }
      }
    }
  }
}`
const META_RECRUITMENT_QUERY = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDo2NjU=") {
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
const META_RECRUITMENT_DETAIL_QUERY = `query($slug:ID!, $language:LanguageCodeEnum!){
  jobOpportunity(id:$slug,idType:SLUG){
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
const SLUG_RECRUITMENT_QUERY =(id)=> `{
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
const SLUG_RECRUITMENT_DETAIL_QUERY =(id)=> `{
  jobOpportunity(id: "${id}", idType: ID) {
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

const SLUG_JOB_FEATURE = `query ($language: LanguageCodeFilterEnum!) {
  allJobOpportunity(
    first: 10
    where: {language: $language, orderby: {field: DATE, order: DESC}}
  ){
    nodes{
      slug
      title
      recruimentDetail{
        infoJob{
          expirationDate
        }
      }
    }
  }
}`

const JOB_SEARCH_INPUT_QUERY = gql `query getDataSearchJob($language:LanguageCodeFilterEnum!,$text:String!, $offset:Int!, $size:Int!){
  allJobOpportunity(
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
      title
      slug
    }
  }
}`
const POPUP_JOB_QUERY = `query getJobPopUp($language: LanguageCodeFilterEnum!) {
  allJobOpportunity(
    first: 10
    where: {orderby: {field: DATE, order: DESC}, language: $language}
  ) {
    nodes {
      recruimentDetail{
        infoJob{
          expirationDate
        }
      }
    }
  }
}`
export {
  GET_DATA_RECRUIMENT_DETAIL,
  GET_DATA_NEW_JOBS,
  GET_DATA_RECRUIMENT_PAGE,
  GET_ALL_SEARCH_BY_SERVER,
  META_RECRUITMENT_QUERY,
  META_RECRUITMENT_DETAIL_QUERY,
  SLUG_RECRUITMENT_QUERY,
  SLUG_RECRUITMENT_DETAIL_QUERY,
  SLUG_JOB_FEATURE,
  JOB_SEARCH_INPUT_QUERY,
  POPUP_JOB_QUERY
}