import Gallery from './Gallery.js'
import Series from './Series.js'
import Video from './Video.js'
import Video2 from './Video2.js'
import Gallery2 from './Gallery2.js'

const Bio = () =>
                 `<div class="about">

                    <div class="bio">
                      <div class="profile__image">
                          <img src="images/profile.jpg" alt="">
                      </div>
                      <div class="profile__info">
                        <div class="data">
                          <h4>4,258</h4>
                          <p>Posts</p>
                        </div>
                        <div class="data">
                          <h4>6.8M</h4>
                          <p>Followers</p>
                        </div>
                        <div class="data">
                          <h4>4,258</h4>
                          <p>Following</p>
                        </div>
                      </div>
                    </div>

                 <!--- profile description --->

                    <div class="profile__about">
                      <h4>Cuppy</h4>
                      <p><i class="fal fa-star"></i> DJ, Artist, & Philanthropist <span class="blue">NG</span> <img src="heart.png" alt=""></p>
                      <p><i class="fal fa-star"></i> Host of #AfricaNow on Apple Music <span class="gray">...more</span></p>
                      <p>youtu.be/Xg-GUJRnPWQ</p>
                      <p>Followed by <span class="bold">funkejenifaakindele</span>, <span class="bold">olaleye.tolu</span> and <span class="bold">21 others</span></p>
                    </div>

                    <!-- contact buttons -->

                    <div class="profile__contact">
                      <button class="blue">Follow</button>
                      <a href="">Message</a>
                      <a href="">Email</a>
                      <button><i class="fas fa-chevron-down"></i></button>
                    </div>

                    <!-- profession -->

                    <div class="profession">
                      <span>
                        <div class="image">
                          <img src="images/dj.jpg" alt="">
                        </div>
                        <p>DJing</p>
                      </span>
                      <span>
                        <div class="image">
                          <img src="images/music.jpg" alt="">
                        </div>
                        <p>Music</p>
                      </span>
                      <span>
                        <div class="image">
                          <img src="images/radio.jpg" alt="">
                        </div>
                        <p>Radio</p>
                      </span>
                      <span>
                        <div class="image">
                          <img src="images/charity.jpg" alt="">
                        </div>
                        <p>Charity</p>
                      </span>
                    </div>

                    <!--  Gallery Icons -->

                    <div class="gallery__icons">
                      <i class="fal fa-th active-gallery"></i>
                      <i class="fal fa-tv "></i>
                      <i class="fal fa-video"></i>
                      <i class="fal fa-magic" style="font-weight: 100;"></i>
                      <i class="fal fa-user-nurse" style="font-weight: 100;"></i>
                    </div>

                    <!-- Photo and Video Collection (Gallery) -->

                    ${Gallery()}
                
                    <!-- series -->
                    ${Series()}
                
                    <!-- videos -->
                    ${Video()}

                    <!-- video 2 -->

                    ${Video2()}

                    <!-- Gallery 2 -->
                    
                </div>`

export default Bio