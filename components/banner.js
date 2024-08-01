import { logo } from"./banner.module.css";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
}

const Banner = ({children}) => {
    return (
        <div className="container">
            <header className="row mb-4">
                <div className="col-5">
                    <img src="globo.jpg" alt="Logo" className={logo} />
                </div>
                <div className="col-7 mt-4" style={subtitleStyle}>
                    {children}
                </div>
            </header>
        </div>
    )
}
export default Banner;