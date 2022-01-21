import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';


export default function DarkModeToggleButton() {
    const darkMode = useDarkMode(false);
    const toggle = ()=>{
        darkMode.value === true ? document.body.setAttribute("data-theme","light") : document.body.setAttribute("data-theme", "dark");
        darkMode.toggle();
    }
    return (
        <div>
            <DarkModeToggle
                onChange={toggle}
                checked={darkMode.value}
                size={60}
                id="darkSwitch" />
        </div>

    )
}