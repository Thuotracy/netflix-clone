import './>register.scss'

export default function Register() {
  return (
    <div className='register'>
        <div className='top'>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <button className='loginButton'>Sign In</button>
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
