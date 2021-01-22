

const ProfileInfo = () => 
       {

       return(
        `
        <div class="profile__info container">
        <div class="profile__info__main">
        <div class="profile__info__main__photo">
            <img src="Assets/imgs/cuppy_profile.jpg" />
        </div>

        <div class="profile__meta__group">
            <div class="profile__info__meta">
            <h3>4,259</h3>
            <p>posts</p>
            </div>

            <div class="profile__info__meta">
            <h3>6.8M</h3>
            <p>Followers</p>
            </div>

            <div class="profile__info__meta">
            <h3>291</h3>
            <p>Following</p>
            </div>
        </div>
        </div>

        <div class="profile__info__about">
        <h3 class="about__header">Cuppy</h3>
        <div class="about__sub">
            <p>Dj, Artist & Philanthropist</p>
            <p>Host of #AfricaNow on Apple Music</p>
            <p>Founder of <span class="about__sub__more">...more</span></p>
            <p>youtu.be/Xg-GUJRnPWQ</p>
            <p>
            Followed by
            <span class="about__sub__highlight">harrisonAustin</span> and
            <span class="about__sub__highlight">30 others</span>
            </p>
        </div>
        </div>
        </div>
        `
       )
    }


export default ProfileInfo;