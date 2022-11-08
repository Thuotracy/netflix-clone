import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

        <div className='info'>
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
            <span className='desc'>
                Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."
            </span>

            <div className='buttons'>
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined/>
                    <span>Info</span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Featured