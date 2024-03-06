
interface HeadingProps {
    color: string;
    text: string;
    type: "LARGE" | "SMALL";
}
const Heading = ({ color, text, type }: HeadingProps) => {
    return (
        <>
            {type === "LARGE" ? <h1 style={{ color: color }} className="capitalize  text-2xl md:text-3xl font-semi-bold ">{text}</h1> : <p style={{ color: color }} className="capitalize">{text}</p>}
        </>
    )
}

export default Heading
