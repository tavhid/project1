import './index.sass'

const Select = ({ child, value }) => {
  return (
    { child }
  )
}

const Option = ({ child }) => {
  return (
    { child }
  )
}

const NavFilters = () => {
  return (  
    <div className="nav-filter">
      
      <Select value='Год'>
        <Option>2017</Option>
      </Select>
        <Option>2018</Option>
        <Option>2019</Option>
        <Option>2020</Option>

    </div>
  )
}
 
export default NavFilters