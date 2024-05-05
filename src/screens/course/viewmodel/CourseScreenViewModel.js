
import { useState } from "react";

export default CourseScreenViewModel = () => {

    const [colorButton, setColor] = useState(false)

    const handleObserverColorUi = () => {
        setColor(!colorButton)
    }
    return { colorButton, handleObserverColorUi }
}