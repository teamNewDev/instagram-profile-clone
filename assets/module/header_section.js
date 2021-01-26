'use strict'


    const headerData = () => {
        return (`
 			        <header>
        <div class="status_info">
            <div class="profile_image">
                <img src="assets/img/profile.png" alt="">
            </div>
            <div class="status">
                <div class="status__posts">
                    <div>4,259</div>
                    <label>Posts</label>
                </div>
                <div class="status__followers">
                    <div>6.8M</div>
                    <label>Followers</label>
                </div>
                <div class="activity-status__following">
                    <div>291</div>
                    <label>Following</label>
                </div>
            </div>
        </div>
        <div class="bio">
            <p>
                Cuppy <br>
                <i class="fa fa-star-o" style="color:gray;"></i> &nbsp;DJ, Artist, & Philanthropist <br>
                <i class="fa fa-star-o" style="color:gray;"></i> &nbsp;Host of <span>#AfricaNow on Apple Music</span> <br>
                <i class="fa fa-star-o" style="color:gray;"></i> &nbsp;Founder of <span>@CuppyFoudation</span> <br>
                <span>youtu.be/Xg-GUJRnPWQ</span> <br>
                Followed by <b>real_adaeze1. mc_willams12 and 30 others</b>
        </div>
        <section>
            <div class="buttons-container">
                <button class="active">Follow</button>
                <button>Message</button>
                <button>Email</button>
                <button> <i class="fa fa-angle-down"></i> </button>
            </div>
        </section>
        <div class="icons">
        </div>
    </header>
           `
        	)
    }

      export default  headerData()
