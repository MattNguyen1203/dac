'use client'
import React, { useState } from 'react'
import layer_11 from '@/assets/imgs/Layer_11.svg'
import layer_12 from '@/assets/imgs/Layer_12.svg'
import layer_13 from '@/assets/imgs/Layer_13.svg'
import layer_14 from '@/assets/imgs/Layer_14.svg'
import layer_15 from '@/assets/imgs/Layer_15.svg'
import { gql, useMutation } from '@apollo/client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import OpportunityItem1 from '@/components/common/OppoturnityItem1'
import { analytics } from '@/firebase'
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage'

// queries form
const SUBMIT_FORM = gql`
  mutation ($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      entry {
        id
      }
      errors {
        message
      }
    }
  }
`
function Infomation({ dataContent, lang, dataJobNew }) {
    const [number, setNumber] = useState(2)
    const [fileUpload, setFileUpload] = useState(null)
    const [mutate, { loading }] = useMutation(SUBMIT_FORM)
    const handleClick = () => {
        setNumber(number + 2)
    }
    const dataJobNewMb = dataJobNew?.slice(0, number)
    const INITAL_FORM_STATE = {
        fullName: '',
        email: '',
        telephone: '',
        date: '',
        address: '',
        fileVal: ''
    }
    const FORM_VALIDATION = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        telephone: Yup.string()
            .matches(/^[0-9]+$/, 'Enter a valid number')
            .min(9, 'Must have 9 number')
            .required('Required'),
        email: Yup.string().email('Invalid email.').required('Required'),
        date: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        fileVal: Yup
            .mixed()
            .test("has-files", "CV is a required field!", () => {
                return fileUpload && fileUpload.length > 0;
            })
            .test("fileType", "Invalid file format!", () => {
                if (!fileUpload) return true;

                const supportedFormats = [
                    "jpg",
                    "jpeg",
                    "png",
                    "doc",
                    "docx",
                    "pdf",
                ];
                const fileExtension = fileUpload[0]?.type
                    .split("/")
                    .pop()
                    .toLowerCase();
                return supportedFormats.includes(fileExtension);
            }),
    })

    const handleForm = (values, resetForm) => {
        mutate({
            variables: {
                input: {
                    id: 1,
                    fieldValues: [
                        { id: 1, value: values.fullName },
                        { id: 3, value: values.email },
                        { id: 4, value: values.telephone },
                        { id: 5, value: values.date },
                        { id: 6, value: values.address },
                        { id: 9, value: values.fileVal },
                    ]
                }
            }
        }).then((res) => {
            if (res?.data?.submitGfForm?.errors?.length > 0) {
                // Have Error
            } else {
                // Successful
                resetForm()
            }
        })
    }
    return (
        <section className='max-md:flex-col md:flex-wrap justify-between flex recruitmentInfo max-md:pb-[12.27rem]'>
            {/* content-left */}

            <div className='bg-[#F5F5F5] md:pl-[4.17rem] md:pb-[6.4rem] pb-[8rem] pt-[6.4rem] max-md:px-[4.53rem] md:w-[50%]'>
                <h2 className='heading md:w-[28.64583rem] md:mb-[2.8rem] mb-[7rem] max-md:!text-[6.93333rem]'>{dataContent?.heading}</h2>
                <div
                    className='grid job_Info md:w-[44.63542rem] md:gap-[0.5rem] gap-[4rem] max-md:!leading-[1.7] md:!leading-[1.5]'
                    dangerouslySetInnerHTML={{ __html: `${dataContent?.description}` }}>
                </div>
            </div>

            {/* content-right */}

            <div className='md:pt-[8.4rem] pt-[13rem] flex-1 md:bg-[#F5F5F5] max-md:px-[4.53rem] md:pb-[6.4rem] max-md:order-3 md:pl-[13rem] md:pr-[4.17rem]'>
                <h3 className='description !font-normal md:mb-[3rem] mb-[7rem]'>{dataContent?.dataForm?.title}</h3>
                <Formik
                    initialValues={{ ...INITAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={async (values, { resetForm }) => {


                        if (fileUpload !== null) {
                            const fileRef = ref(analytics, 'newfiles/notes')
                            uploadBytes(fileRef, fileUpload[0]).then((data) => {
                                getDownloadURL(data.ref).then((url) => {
                                    values.fileVal = url
                                    handleForm(values, resetForm)
                                })
                            })

                        } else {
                            handleForm(values, resetForm)
                        }

                    }}
                >
                    {({ errors, touched }) => {
                        return (
                            <Form>
                                <div className='flex flex-col bg-transparent formSubmit md:mb-[1rem]'>
                                    {/* họ tên */}
                                    <div className='flex justify-between items-center md:pb-[1rem] border-b border-solid border-[#000] max-md:pb-[1.5rem] max-lg:mt-[1rem]' >
                                        <Field name="fullName" type='text' placeholder={dataContent?.dataForm?.fullName || 'Họ tên'} className='bg-transparent' />
                                        <Image src={layer_11} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.fullName && touched.fullName ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]' >{errors.fullName}</div>
                                    ) : null}

                                    {/* email */}
                                    <div className='flex justify-between items-center md:pb-[1rem] border-b border-solid border-[#000] max-md:pb-[1.5rem] max-lg:mt-[1rem] ' >
                                        <Field name="email" type="email" placeholder={dataContent?.dataForm?.email || 'email'} className='bg-transparent' />
                                        <Image src={layer_12} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.email && touched.email ? <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.email}</div> : null}
                                    {/* telephone */}
                                    <div className='flex justify-between items-center md:pb-[1rem] border-b border-solid border-[#000] max-md:pb-[1.5rem] md:mb-[1rem] max-lg:mt-[1rem]' >
                                        <Field name="telephone" type='text' placeholder={dataContent?.dataForm?.telephone || 'Số điện thoại'} className='bg-transparent' />
                                        <Image src={layer_13} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.telephone && touched.telephone ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.telephone}</div>
                                    ) : null}

                                    {/* date */}
                                    <div className='flex justify-between items-center md:pb-[1rem] border-b border-solid border-[#000] max-md:pb-[1.5rem] md:mb-[1rem] max-lg:mt-[1rem]' >
                                        <Field name="date" type='text' placeholder={dataContent?.dataForm?.dateOfBirth || 'Ngày sinh'} className='bg-transparent' />
                                        <Image src={layer_14} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.date && touched.date ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.date}</div>
                                    ) : null}
                                    {/* address */}
                                    <div className='flex justify-between items-center md:pb-[1rem] border-b border-solid border-[#000] max-md:pb-[1.5rem] md:mb-[1rem] max-lg:mt-[1rem]' >
                                        <Field name="address" type='text' placeholder={dataContent?.dataForm?.address || 'Địa chỉ'} className='bg-transparent' />
                                        <Image src={layer_15} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.address && touched.address ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.address}</div>
                                    ) : null}

                                    {/* attach file */}
                                    <div className='flex flex-col justify-between md:pl-[1rem] max-md:pt-[2rem] md:pb-[1rem] mb-[8rem] border-b border-solid border-[#000] md:mb-[1rem]' >
                                        <label className='md:mb-[1rem] mb-[2rem] md:text-[#888] md:text-[1.4rem] lg:text-[0.83333rem] text-[3.2rem]'>{dataContent?.dataForm?.attachFile || 'File đính kèm'}</label>
                                        <input name='fileVal' type='file' onChange={(e) => setFileUpload(e.target.files)} className='bg-transparent' />
                                    </div>
                                </div>
                                <Button className={'md:left-[0]'} text={dataContent?.dataForm?.button || 'Gửi thông tin'} />
                            </Form>
                        )
                    }}

                </Formik>

            </div>

            {/* profile */}
            <div
                className='grid max-md:gap-[4rem] gap-[1rem] job_Info md:w-[44.375rem] cv_content max-md:px-[4.53rem] max-md:!text-start pt-[6.84rem] md:mb-[1.93rem] md:pl-[4.17rem] md:pt-[3.17rem]'
                dangerouslySetInnerHTML={{ __html: `${dataContent?.requestProfile}` }}
            >
            </div>

            <section className='md:pt-[1.13rem] pt-[6.4rem] px-[4.27rem] md:px-[4.17rem] md:pb-[10rem]'>
                <h3 className='description md:mb-[2.24rem] mb-[6rem]'>{dataContent?.subTitle}</h3>
                <div className='md:grid max-md:hidden grid-cols-4'>
                    {dataJobNew?.map((item, index) => (
                        <OpportunityItem1 key={index} lang={lang} data={item} />
                    ))}
                </div>
                <div className='grid md:hidden'>
                    {dataJobNewMb?.map((item, index) => (
                        <OpportunityItem1 key={index} lang={lang} data={item} />
                    ))}
                </div>
                {
                    number < dataJobNew?.length
                    &&
                    <p onClick={handleClick} className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>

                }
            </section>

        </section>
    )
}

export default Infomation