import { useState } from "react";
import './AccordionSection.css';

function AccordionSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordion-section-title-open" : "";
    return (
        <div className="accordion-section">
            <button
                className={`accordion-section-title ${openClass}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen ? "true" : "false"}
            >
                <span>{title}</span>
            </button>
            {isOpen && (
                <div className="accordion-section-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default AccordionSection;