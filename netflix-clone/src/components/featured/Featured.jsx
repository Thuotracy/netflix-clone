import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

        <div className='info'>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.fanart.tv%2Ffanart%2Fdark-5a2a7712af6d1.jpg&imgrefurl=https%3A%2F%2Ffanart.tv%2Fseries%2F334824%2Fdark%2F&tbnid=Z78R0ztGhmfKTM&vet=12ahUKEwiB4rra3Z77AhVAVaQEHbqOD-4QMygBegUIARDBAQ..i&docid=dS81MNldYr36_M&w=1000&h=562&q=dark%20series%20thumbnail&ved=2ahUKEwiB4rra3Z77AhVAVaQEHbqOD-4QMygBegUIARDBAQ" alt="" />
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