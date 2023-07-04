import { Link } from "react-router-dom";
import { AiFillDatabase } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className='mx-4 my-5 text-white'>
        <Link to="/"><img src="img/logo.png" className='m-auto' alt=""  width="200px"/></Link>
        <div className="container m-5">
            <Link className="flex" to="/medios">
                <AiFillDatabase className="my-1" height="25px"/> 
                <span className="mx-3">Medios</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar