import "./Connect.css";
import { Link } from "react-router-dom";
const Connect = () => {
    return (
        <div className="connect flex flex-col items-center justify-center ">
            <p className="connect-first">Let’s connect and</p>
            <p className="connect-second">power up</p>
            <Link to="/contactus">
                <button className="connect-btn flex items-center justify-center text-white gap-4">contact us
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z" fill="#F7F7F7" /> </svg>
                </button>
            </Link>
        </div>
    );
}

export default Connect;
