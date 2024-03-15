

import DocumentationCard from "./DocumentationCard"

const Documentation = () => {
    return (
        <section className="w-full ">
            <div className="w-full bg-navy_blue text-center p-8">

                <h1 className="capitalize text-white text-2.5xl md:text-3xl font-medium ">DOCUMENTATION</h1>
            </div>
            <div className="w-4/5 md:w-full   m-auto gap-8  flex-wrap flex-col md:flex md:flex-row justify-center items-center md:p-4 lg:p-20">
                <DocumentationCard link="https://docs.google.com/document/d/1IMxulDYbzrKzihZtJ-vJDcV36O4XEvmH/edit?usp=sharing&ouid=114022452434884893836&rtpof=true&sd=true" name="ANNUAL REPORT 2019-20.docx" />
                <DocumentationCard link="https://drive.google.com/file/d/1UjKxG2iPoQhAQ8VpQYp9HiiZbKV_Ur1v/view?usp=sharing" name="NC ANNUAL REPORT 2020-21.pdf" />
                <DocumentationCard link="https://drive.google.com/file/d/1BkGetb7U8DoQV3eSz1SyF85m_SaRZp0D/view?usp=sharing" name="ANNUAL REPORT 22-23.pdf" />
                <DocumentationCard link="https://drive.google.com/file/d/1xMKXck3yt9KoqiVcrEq92yF8p_0z1ZRr/view?usp=sharing" name="Audit report FY 20-21.pdf" />
                <DocumentationCard link="https://drive.google.com/file/d/1UoeCa-ApKOfmQGegWJ4wT-2urAuJ5pPm/view?usp=sharing" name="Audit report FY 2021-22.pdf" />
            </div>
        </section>
    )
}

export default Documentation
