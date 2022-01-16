import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

export default function DarkModeToggleButton() {
    const darkMode = useDarkMode(false);
    return (
        <DarkModeToggle
            onChange={darkMode.toggle}
            checked={darkMode.value}
            size={60}
        />
    )
}