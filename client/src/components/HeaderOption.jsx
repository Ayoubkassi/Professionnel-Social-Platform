import './HeaderOption.css'
import { Avatar } from '@mui/material'

const HeaderOption = ({avatar, Icon , title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className='headerOption__icon' /> }
      { avatar && 
        <Avatar className='headerOption__icon' sx={{ height: '28px', width: '28px' }} src={avatar} />
      }
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
