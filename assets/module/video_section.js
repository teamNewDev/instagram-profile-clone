
(function() {
        const videoData = () => {
            return `
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
                <!--
                <div class="video" style="background-image:url('assets/img/cover5.png')"></div>
                <div class="video" style="background-image:url('assets/img/cover5.png')"></div>
                <div class="video" style="background-image:url('assets/img/cover5.png')"></div>
                <div class="video" style="background-image:url('assets/img/cover5.png')"></div> -->
	`
        }
        document.querySelector('.video_inner-container').innerHTML = videoData()
    })()