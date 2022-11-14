import './register.scss'

export default function Register() {
  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <button className='loginButton'>Sign In</button>
            </div>
        </div>

        <div className='container'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere, Cancel anytime.</h2>
            <p>Ready to watch? Enter your Email to create or restart your membership</p>
            <div className='input'>
                <input type="email" placeholder='email address' />
                <button className='registerButton'>Get started</button>
            </div>
        </div>
    </div>
  )
}
