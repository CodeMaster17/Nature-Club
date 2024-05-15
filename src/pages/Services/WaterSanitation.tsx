import Heading from "../../components/Heading"
import Paragraph from "./Paragraph"
import SmallHeading from "./SmallHeading"


const WaterSanitation = () => {
    return (
        <div className="w-full">
            <br />
            <div className="w-full text-center">
                <Heading text="Water, Sanitation and Hygiene" color="#588645" type="LARGE" />
            </div>
            <br />
            <br />
            <img src="/Water_and_sanitation/IMG_27.jpg" alt="Water Sanitation" className="w-full" />
            <br />
            <SmallHeading>
                WATER, SANITATION & HYGIENE:
            </SmallHeading>
            <br />

            <Paragraph>
                As District NGO Coordinator for Unicef supported Child’s Environment project for Kendrapara district (1999–2003) Nature’s Club worked with 54 NGOs/CBOs. Completed 128 Model sanitation villages in the district. Created massive awareness on safe water, sanitation, IHL and personal hygiene. Constructed additional 153 school toilet units in Rajkanika block. Community participation through contribution and community monitoring were exemplary. One Model Sanitation village with World Bank SGF fund.
            </Paragraph>
            <br />
            <Paragraph>
                Campaigns on Hand washing practices. Post flood water quality monitoring by trained community volunteers with water testing kits empowered communities to keep track of their water quality.
            </Paragraph>
            <br />
            <Paragraph>
                Constructed 05 raised TW platforms in flood prone villages with Save the Children support.

            </Paragraph>

        </div>
    )
}

export default WaterSanitation
