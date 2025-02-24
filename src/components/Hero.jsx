import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <main>
                <div className="text-box">
                    <h1>Welcome to Jyothi Nilaya</h1>
                    <p>
                    Jyothi Nilaya is residence hall providing accommodation facilities for female students near
                    Kengeri campus. The residence hall is managed by Catholic Religious nuns -Ursline Sisters of
                    Mary Immaculate.
                    </p>
                    <Link to="/Contact" className="hero-btn">Contact Us Here</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;