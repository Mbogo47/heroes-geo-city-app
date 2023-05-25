import { Link } from "react-router-dom"
import '../App.css'

function Title() {

    return (
        <>
            <div className="title">
                <div className='buttons'>
                    <Link to='/' className="link">
                        <button className='btn'><span>Geo city app</span></button>
                    </Link>
                    <Link to='/about' className="link">
                        <button className='btn'>About</button>
                    </Link>

                </div>


            </div>



        </>
    )
}


export default Title