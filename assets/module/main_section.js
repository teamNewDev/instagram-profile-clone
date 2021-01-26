'use strict';
	
	const mainData = () =>{
		return `
			
		   <main>
        <nav>
            <button data-action="post" class="active"> <i class="fa fa-table"></i> </button>
            <button data-action="video"> <i class="fa fa-television"></i> </button>
            <button data-action="funny-video"> <i class="fa fa-smile-o"></i></button>
            <button data-action="tag_post"> <i class="fa fa-user"></i></button>
        </nav>
        <div class="post_container post_section" data-section-type="post">
<div class="post" style="background-image:url('https://images.unsplash.com/photo-1507065938252-17f453893fc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')"></div>
            <div class="post" style="background-image:url('assets/img/cover2.png')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/flagged/photo-1579711739060-5c3a87cc56b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1595831004082-7d028af1387b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1491210953611-dcd4c66e0840?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1486714941986-f2113c751c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1508474722893-c3ccb8918d39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80g')"></div>
            <div class="post" style="background-image:url('assets/img/cover4.png')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1599809748572-f2d8104f8f00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1559430211-b0ce47683c38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=615&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1548382074-90f99590f1da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1553701879-4aa576804f65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="post" style="background-image:url('assets/img/cover1.png')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1603054748286-850a605cd108?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="post" style="background-image:url('https://images.unsplash.com/photo-1551524779-dc6cc00eb2bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')"></div>
        </div>
        <div class="series_popup" data-type="pop_up-menu">
            <div class="series">
                <span></span>
                <b>Series</b>
                <hr>
                <div>
                    <ul>
                        <li>Interview</li>
                        <li> <i class="fa fa-angle-right"></i> </li>
                    </ul>
                    <ul>
                        <li>Cuppy DJ&nbsp;Sets</li>
                        <li> <i class="fa fa-angle-right"></i> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="video_container disabled post_section" data-section-type="video">
            <div class="video__collaps">
                <button class="seriesButton">Series <i class="fa fa-caret-down"></i> </button>
            </div>
            <div class="video_inner-container">
                 <div class="video" style="background-image:url('https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
                <div class="video" style="background-image:url('https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            </div>
        </div>
        <div class="funny_container disabled post_section" data-section-type="funny-video">
             <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1578831906480-b33b9282891b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1592465873099-b0344127ab2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1583512603834-01a3a1e56241?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div> 
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1583511666445-775f1f2116f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
        </div>
        <div class="tag-post_container disabled post_section" data-section-type="tag_post">
             <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1546460573-e6c02e39568a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=660&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1519003300449-424ad0405076?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1485735662814-c4f66e49dbae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGZ1bm55fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZ1bm55fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"></div>
            <div class="tagged" style="background-image:url('assets/img/cover4.png')"></div>
            <div class="tagged" style="background-image:url('https://images.unsplash.com/photo-1541848156497-67cadcfbc7de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80')"></div>
        </div>
    </main>
    `
	}
	export default mainData()

