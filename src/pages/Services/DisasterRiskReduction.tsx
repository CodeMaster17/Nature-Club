
import Heading from '../../components/Heading'
import Paragraph from './Paragraph'

const DisasterRiskReduction = () => {
    return (
        <div className='w-full'>
            <br />
            <div className="w-full text-center">
                <Heading text="Disaster Risk Reduction" color="#588645" type="LARGE" />
            </div>
            <br />
            <br />
            <img src="services/disaster.png" alt="Disaster Risk Reduction" className='w-full' />
            <br />
            <Paragraph>
                Resilient children and resilient communities are the goal of CCDRR.
            </Paragraph>
        </div>
    )
}

export default DisasterRiskReduction
