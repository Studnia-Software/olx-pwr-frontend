import styles from "./ProfilePage.module.scss"

function ProfilePage() {
    return <div className={styles.profileContainer}>
        <img className={styles.headerImage} src="/src/assets/header.png" alt="header image"/>
        <div className={styles.infoCon}>
            <div className={styles.profilePicture}>
                <img src="/src/assets/profile.png" alt="profile picture"/>
            </div>
        </div>
    </div>
}

export default ProfilePage;