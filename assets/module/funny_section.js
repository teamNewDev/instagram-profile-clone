(function(){
	
	const funnyData = () =>{
		return `
			 <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1578831906480-b33b9282891b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1592465873099-b0344127ab2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"></div>
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1583512603834-01a3a1e56241?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"></div> 
            <div class="funny" style="background-image:url('https://images.unsplash.com/photo-1583511666445-775f1f2116f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80')"></div>
		`
	}
	document.querySelector('.funny_container').innerHTML = funnyData()
})()