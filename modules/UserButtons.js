

const UserButtons = () => 
        {
            return (
        `
        <div class="user__buttons container">
            <button class="follow__button button">Follow</button>
            <button class="message__button button">Message</button>
            <button class="email__button button">Email</button>
            <button class="drop__down__button">
                <svg
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="24px"
                    height="24px"
                >
                    <rect fill="none" height="24" width="24" />
                    <g>
                    <polygon
                        points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
                    />
                    </g>
                </svg>
            </button>
        </div>
        `
        )
    }

export default UserButtons