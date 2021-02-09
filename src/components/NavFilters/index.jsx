import './index.sass'

const Select = ({ children, value }) => {
  return (
    { children }
  )
}

const Option = ({ children }) => {
  return (
    { children }
  )
}

const NavFilters = () => {
  return (  
    <div className="nav-filter">
      
      <Select value='Год'>
        <Option>2017</Option>
        <Option>2018</Option>
        <Option>2019</Option>
        <Option>2020</Option>
      </Select>

    </div>
  )
}
 
export default NavFilters