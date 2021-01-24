import Gallery from './Gallery.js'

const Bio = () => `<div class="about">
                    <div class="bio">
                        <div class="profile__image">
                            <img src="https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/130447775_695242761181127_6570908212231106919_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_ohc=gTqn5sI4CM0AX9VeSlT&tp=1&oh=5a6ad9f3a66d299978da229ff4fb046c&oe=603375C6" alt="">
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
                                <img src="https://instagram.fabv2-1.fna.fbcdn.net/v/t51.2885-15/e35/c45.512.1035.1035a/s150x150/106273079_2642031592676530_15452110712306974_n.jpg?_nc_ht=instagram.fabv2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=igd8PjNXyQoAX8h1QB3&tp=1&oh=79310f3b1f036ce4ec87ae6491b23f8d&oe=600D0CFA" alt="">
                            </div>
                            <p>Music</p>
                        </span>
                        <span>
                            <div class="image">
                                <img src="https://instagram.fabv2-1.fna.fbcdn.net/v/t51.12442-15/e15/c102.360.497.497a/s150x150/107248569_2620987841550478_457525924260294724_n.jpg?_nc_ht=instagram.fabv2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=8EpZKLfhZjIAX-M3ww5&tp=1&oh=d37814dafa3c1a6b425c6316c655b59b&oe=600D09A7" alt="">
                            </div>
                            <p>Music</p>
                        </span>
                        <span>
                            <div class="image">
                                <img src="https://instagram.fabv2-1.fna.fbcdn.net/v/t51.2885-15/e35/c54.518.1035.1035a/s150x150/106246042_566747764213249_2372639458583392537_n.jpg?_nc_ht=instagram.fabv2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=po0OHrNj4iIAX-Frmqp&tp=1&oh=d3dcae6b562f15f723858015d8dd8330&oe=600D8011" alt="">
                            </div>
                            <p>Music</p>
                        </span>
                        <span>
                            <div class="image">
                                <img src="https://instagram.fabv2-1.fna.fbcdn.net/v/t51.2885-15/e35/c66.553.1035.1035a/s150x150/106236347_1467569436964270_7885937919983396725_n.jpg?_nc_ht=instagram.fabv2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=hRR5kGV569sAX8y409w&tp=1&oh=f8f790ddb1e7534cf8a3f37c1b467d40&oe=600D7A99" alt="">
                            </div>
                            <p>Music</p>
                        </span>
                    </div>

                    <!--  Gallery Icons -->

                    <div class="gallery__icons">
                        <i class="fal fa-th"></i>
                        <i class="fal fa-tv"></i>
                        <i class="fal fa-video"></i>
                        <i class="fal fa-magic" style="font-weight: 100;"></i>
                        <i class="fal fa-user-nurse" style="font-weight: 100;"></i>
                    </div>

                    <!-- Photo and Video Collection (Gallery) -->

                    ${Gallery()}
                </div>`;

export default Bio
