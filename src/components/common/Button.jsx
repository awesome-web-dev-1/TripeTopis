import {Link} from 'react-router-dom'

const Button = ({label,className,path}) => {
  return (
    <Link to={path} className={className}>{label}</Link>
  )
}

export default Button