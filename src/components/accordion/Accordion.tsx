import { useState, type ReactElement } from "react";

type Color = 'primary' | 'secondary'

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    color?: Color;
}

const AccordionConfig = {
	// Colors 
	primary: 'border-2 p-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100',
	secondary: 'p-2 bg-orange-500 rounded hover:bg-orange-700',
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion" >
            <div className={`accordion-header ${AccordionConfig}`} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    )
}

export default Accordion;