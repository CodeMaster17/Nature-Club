
interface HeadingProps {
    color: string;
    text: string;
    type: "LARGE" | "SMALL";
}
const Heading = ({ color, text, type }: HeadingProps) => {
    return (
        <>
            {type === "LARGE" ? <h1 style={{ color: color }} className="capitalize text-center text-3xl font-bold">{text}</h1> : <p style={{ color: color }} className="capitalize text-center ">{text}</p>}
        </>
    )
}

export default Heading
