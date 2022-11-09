import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listItem.scss'

export default function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='listitem' 
      style={{left: isHovered && index * 225 - 50}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />

        <div className='iteminfo'>
          <div className='icons'>
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>

            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>

            <div className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, mollitia at possimus est temporibus illum autem cupiditate necessitatibus amet atque? Nesciunt voluptates accusamus laboriosam. Maxime beatae sit a architecto doloremque.
            </div>

            <div className='genre'>Action</div>

          </div>
        </div>
    </div>
  )
}
