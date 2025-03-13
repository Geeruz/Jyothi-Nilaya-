import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <main>
                <div className="text-box">
                    <h1>Welcome to Jyothi Nilaya</h1>
                    <p>
                    Jyothi Nilaya is a residence hall providing accommodation facilities for female students of Christ University
                    Kengeri campus. The residence hall is managed by Catholic Religious nuns 
                    (Ursuline Sisters of Mary Immaculate).
                    </p>
                    <Link to="/Contact" className="hero-btn">Contact Us Here</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;