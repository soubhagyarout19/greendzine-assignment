import Group46 from '../assets/Group 46.png';
import BodyMiddleLogo from '../assets/moptro logo.png';

const Header = () =>{
    return(
        <>
            <div className="body-main">
                <div className="top-image">
                    <img src={Group46}></img>
                </div>
                <div className='body-logo'>
                    <img src={BodyMiddleLogo}></img>
                </div>
            </div>
        </>
    )
}

export default Header;