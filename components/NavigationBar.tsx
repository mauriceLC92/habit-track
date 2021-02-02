import { useState } from 'react';

export const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
        </div>
    );
};
