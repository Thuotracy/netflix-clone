import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'

export default function Listitem() {
  return (
    <div className='listitem'>
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />

        <div className='iteminfo'>
          <div className='icons'>
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>
          </div>
        </div>
    </div>
  )
}
