import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props)=>{
    const {auth, profile} = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    // console.log(auth)
    
    return(
        <nav className="navbar-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Matio Plan</Link>
                {auth.isLoaded &&  links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile,
    }
  }

export default connect(mapStateToProps)(Navbar)