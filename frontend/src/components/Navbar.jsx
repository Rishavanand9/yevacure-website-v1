import { Link } from 'react-router-dom'
import { PAGE_ROUTES } from '../constants'

const Navbar = () => {
    return <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='flex flex-1 list-none items-center gap-8'>
                {PAGE_ROUTES.map((page) => {
                    return (<li key={page.name} className='link'><Link to={page.path}>{page.name} &nbsp; </Link></li>)
                })}
            </ul>

            <div className='nav__logo'>
                <Link to={'/'}>Yevacure <span>.</span></Link>
            </div>

            <div className='nav__icons relative'>
                <span>
                    <Link to={'/search'}>
                        <i className="ri-search-line"></i>
                    </Link>
                </span>

                <span className='hover:text-primary'>
                    <i className="ri-shopping-bag-line"></i>
                    <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>0</sup>
                </span>

                <span>
                    <Link to={'/login'}>
                        <i className="ri-user-line"></i>
                    </Link>
                </span>
            </div>
        </nav>
    </header>
}

export default Navbar


