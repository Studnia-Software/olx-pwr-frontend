import styles from "./ProfilePage.module.scss"
import profilePicture from "/src/assets/profile.png"
import headerImage from "/src/assets/header.png"

function ProfilePage() {
    return <div className={styles.profileContainer}>
        <img className={styles.headerImage} src={headerImage} alt="header image"/>
        <div className={styles.infoCon}>
            <div className={styles.profilePicture}>
                <img src={profilePicture} alt="profile picture"/>
            </div>
        </div>
    </div>
}

export default ProfilePage;