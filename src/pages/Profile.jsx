import {useState, useEffect} from 'react';
import {getAuth, updateProfile} from 'firebase/auth'
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {useNavigate, Link} from 'react-router-dom'
import {toast} from 'react-toastify'


function Profile() {
    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false) 
    const [formData,setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    const {name, email} = formData
    const navigate = useNavigate()
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }
    const onSubmit= async () =>{
       try {
        if (name !== auth.currentUser.displayName) {
            await updateProfile(auth.currentUser, {displayName: name})
            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, {name})
        }
       } catch (error) {
        toast.error('Couldnt update profile')
       }
    }
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div className="profile">
            <header className='profileHeader'>
                <p className="pageHeader">My profile</p>
                <button type='button' className="logOut" onClick={onLogout}>
                    Log out
                </button>
            </header>
            <main>
                <div className="profileDetailsHeader">
                    <p className="profileDetailsText">
                        Profile details
                    </p>
                    <p className="changePersonalDetails" onClick={() => {changeDetails && onSubmit();setChangeDetails((prevState) => !prevState)}}>
                        {changeDetails ? 'done' : 'change'}
                    </p>
                </div>
                <div className="profileCard">
                    <form>
                        <input type="text" className={!changeDetails ? 'profileName' : 'profileNameActive'} disabled={!changeDetails} id="name" value={name} onChange={onChange}/>
                        <input type="text" className={!changeDetails ? 'profileEmail' : 'profileEmailActive'} disabled={!changeDetails} id="email" value={email} onChange={onChange}/>

                    </form>
                </div>
            </main>
        </div>
    )
}

export default Profile
