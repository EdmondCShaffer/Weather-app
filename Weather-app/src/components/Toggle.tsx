import React, { useState } from 'react';
import "./Toggle.css";
interface ToggleProps {
    onToggle: () => void;
  }
//TODO Add text inside Toggle or above and fix css 
function Toggle({ onToggle }: ToggleProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleToggle = () => {
        setIsChecked((prev: any) => !prev); // Toggle the checkbox state
        onToggle(); // Notify the parent component about the toggle
    };

    return (
        <div>
            <label className="toggle">
                <input className="checkbox" type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default Toggle;