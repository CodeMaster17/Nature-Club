
interface HeadingProps {
    color: string;
    text: string;
    type: "LARGE" | "SMALL";
}
const Heading = ({ color, text, type }: HeadingProps) => {
    return (
        <>
            {type === "LARGE" ? <h1 style={{ color: color }} className="capitalize  text-2xl md:text-3xl font-bold ">{text}</h1> : <p style={{ color: color }} className="text-base font-semi-bold ">{text}</p>}
        </>
    )
}

export default Heading
