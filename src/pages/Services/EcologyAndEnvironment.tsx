
import SmallHeading from './SmallHeading'
import Paragraph from './Paragraph'
import Heading from '../../components/Heading'

const EcologyAndEnvironment = () => {
    return (
        <div className='w-full p-8'>
            <br />
            <div className="w-full text-center">
                <Heading text="Ecology and Environment" color="#588645" type="LARGE" />
            </div>
            <br />
            <br />
            <img src="/services/environment.png" alt="Ecology and Environment" className='w-full' />
            <br />
            <br />
            <SmallHeading>
                Clean energy solution for Climate Change Adaptation
            </SmallHeading>
            <br />
            <Paragraph>
                Light a Billion Lives (LaBL) is a flagship program of The Energy and Resources Institute (TERI) to provide quality lighting to children and communities who are still deprived of it and that also green energy. Nature’s Club is working with TERI in partnership on clean energy solutions since 2009 establishing 22 Solar lantern units and 27 Solar mobile charging facilities in unelectrified villages of Kendrapara district.
            </Paragraph>
            <br />
            <Paragraph>
                We got the opportunity to continue promoting solar technology as grid independent energy solution for household energy needs called Integrated Domestic Energy System (IDES) which addresses energy needs for cooking, Lighting and mobile charging. Improvised cook stoves (ICS) are designed for (1) No smoke, (2) Less fuel wood and (3) Less cooking time.
            </Paragraph>
            <br />
            <Paragraph>
                Rural infrastructures like Solar lantern village hubs and solar mobile charging stations were implemented in 22 and 27 villages respectively in Rajnagar block of Kendrapara district.

            </Paragraph>
        </div>
    )
}

export default EcologyAndEnvironment
