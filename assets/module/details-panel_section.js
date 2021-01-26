
    'use strict';

        const detailsPanel = () => {
            return `
		        <div class="details_panel">
        <ul>
            <li><i class="fa fa-arrow-left"></i></li>
            <li>cuppymusic</li>
            <li> <i class="fa fa-check-circle"></i></li>
        </ul>
        <ul>
            <li id="open-popup" onclick="showPopUp(document.querySelector('.pop_up-menu'))"> <i class="fa fa-ellipsis-v"></i> </li>
            <li><button class="follow-button" style="display:none">follow</button></li>
        </ul>
    </div>
    <div class="pop_up-menu" onclick="removeModal()" data-type="pop_up-menu">
        <ul class="pop_up">
            <li>Report..</li>
            <li>Block</li>
            <li>About This Account</li>
            <li>Restrict</li>
            <li>Hide Your Story</li>
            <li>copy Profile URL</li>
            <li>Share this Profile</li>
        </ul>
    </div>
	`
    }

    export default  detailsPanel()
