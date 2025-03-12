import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="bg-slate-950 text-white">
            <div className="container mx-auto flex justify-between ">
                    <h2 className="footer text-center"> 2025@copyright</h2>
                    <div className="flex justify-between px-10">
                        <Link to="privacy-policy" className="pr-5">Privacy-Policy</Link>
                        <Link to="privacy-policy">Cookie-Policy</Link>
                    </div>
            </div>
        </div>
    );
}

export default Footer;