import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import './Register.scss'
import loginImg from '../../assets/images/Login/login.png';

const SRegister = () => {
    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} className='register-img'/>
            </div>
            <div className="register-content">
                <form action='#'>
                    <div className="register-content__header">
                        <div className="register-content__title1">Đăng ký</div>
                        <div className="register-content__title2">Học viên</div>
                    </div>

                    <div class="input-field">
                        <input type="text" required/>
                        <label>Enter your name</label>
                    </div>
                    <div class="input-field">
                        <input type="text" required/>
                        <label>Enter your phone</label>
                    </div>
                    <div class="input-field">
                        <input type="text" required/>
                        <label>Enter your address</label>
                    </div>
                    <button type="submit">
                        Tiếp tục
                        <Link to={'/fregister'}></Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SRegister