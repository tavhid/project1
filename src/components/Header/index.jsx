import NavFilters from '../NavFilters'
import './index.sass'

const Header = () => {
  return (  
    <header className="header">
      <div className="header__wrap">
        <div className="logo">Data Analitik</div>
        <NavFilters />
      </div>
    </header>
  )
}
 
export default Header