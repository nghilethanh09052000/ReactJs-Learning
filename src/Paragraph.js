
import {useContext} from 'react'
import {themeContext} from './ThemeContext'

function Paragraph(){
    const context = useContext(themeContext)
    return(
        <p className={context.theme}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    )
}
export default Paragraph;