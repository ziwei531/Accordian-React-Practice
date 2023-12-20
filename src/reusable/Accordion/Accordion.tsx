import { Button } from "../Button/Button";
import { useState } from "react";
import "./Accordion.css";

type Props = {
    title: string;
    content: string;
};

const Content = (content: string) => {
    return (
        <>
            <div className="p-container">
                <p>{content}</p>
            </div>
        </>
    );
};

export const Accordion = ({ title, content }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="accordion-container">
                <div className="inner-accordion-container">
                    <h2>{title}</h2>
                    <Button isExpanded={isExpanded} clickFunc={handleClick} />
                </div>
                {isExpanded && Content(content)}
            </div>
        </>
    );
};
