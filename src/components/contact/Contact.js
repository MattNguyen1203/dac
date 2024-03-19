
import Banner from './Banner'
import Branch from './Branch'
import FormContact from './FormContact'
import HandleChangeSlug from '../common/HandleChangeSlug'
function Contact({ dataContact,lang,listSlug }) {
    return (
        <>
            <HandleChangeSlug listSlug={listSlug}/>
            <Banner dataBanner={dataContact?.banner} />
            <main className='containerWrapper'>
                <Branch 
                    lang={lang} 
                    dataBranch={dataContact?.contentAddress} 
                />
                <FormContact listSlug={listSlug} dataForm={dataContact?.contentContact} />
            </main>
        </>
    )
}

export default Contact