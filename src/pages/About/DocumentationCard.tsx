import { IoDocumentText } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface DocumentationCardProps {
    link: string;
    name: string;
}

const DocumentationCard = ({ link, name }: DocumentationCardProps) => {
    return (

        <div className='w-full md:w-[50%] lg:w-[25%] min-h-40 hover:bg-honeydew hover:border-[#C3FAD3] mt-4 mb-4 md:m-0 border-4 border-gray-300 p-6 bg-gray_card cursor-pointer'>
            <Link to={link} target="_blank" className="w-full">
                <div className='flex justify-between w-full'>
                    <IoDocumentText size={40} />
                    <FaExternalLinkAlt size={20} className="font-extralight" />
                </div>
                <br />
                <br />
                <h1 className='text-base font-light'>{name}</h1>
            </Link>
        </div >
    );
};

export default DocumentationCard;
