import { useOptionsContext } from "../context/OptionsContext";
const Options = () => {
    const {theme,setTheme} = useOptionsContext();

    const handleThemeChange = (e) =>{
        setTheme(e.target.value);
    }
    return (  
        <div className="options">
             <label >Theme: </label>
                <select id="theme" name="theme" value = {theme}onChange={handleThemeChange}>
                    <option value="default">Default</option>
                    <option value="light">Light</option>
                    <option value="wood">Wood</option>
                    <option value="velvet">Velvet</option>
                </select>
        </div>
    );
}
 
export default Options;