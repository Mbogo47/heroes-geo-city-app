import '../App.css'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about' >
            <div className='buttons'>
                <Link to='/' className="link">
                    <button className='btn_1'><span>Geo city app</span></button>
                </Link>
                <Link to='/about' className="link">
                    <button className='btn'>About</button>
                </Link>
            </div>
            <p >
                Our App uses this API <a href="https://wft-geo-db.p.rapidapi.com"> https://wft-geo-db.p.rapidapi.com</a>  to fetch different geo locations ie city places currencies country at the click of a button
            </p>

        </div>
    );
}

export default About