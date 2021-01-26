		  import detailPannel from '../module/details-panel_section.js'
		  import headerData from '../module/header_section.js'
		  import mainSection from '../module/main_section.js'
		  import footerSection from '../module/footer_section.js'

		  (async () => {



		     	function pageData() {
			        const data = `
					${detailPannel}
					${headerData}
					${mainSection}
					${footerSection}
					`
			         document.querySelector('#root').innerHTML = data
		          }
		          await pageData() // this will allow other javascript function to work with the rendered element



		          const popUpContainer = document.querySelector('.pop_up-menu')
		          const popUpButton = document.querySelector('#open-popup')
		          const seriesPopUpContainer = document.querySelector('.series_popup')
		          const seriesButton = document.querySelector('.seriesButton')

		          function showPopUp(elem) {
		              elem.style.display = 'flex'
		          }
		          popUpButton.onclick = () =>
		              showPopUp(document.querySelector('.pop_up-menu'))

		          seriesButton.onclick = () =>
		              showPopUp(document.querySelector('.series_popup'))


		          function removeModal() {
		              const dataType = event.target.getAttribute('data-type')

		              if (dataType === 'pop_up-menu') {
		                  event.target.style.display = 'none'
		              }
		          }



		          popUpContainer.onclick = removeModal
		          seriesPopUpContainer.onclick = removeModal

		          const postNavigation = document.querySelector('main nav')

		          //toggle the follow button on the navigation
		          function toggleDetailPanel() {
		              const scrollState = postNavigation.getBoundingClientRect()
		              const buttonContainer = document.querySelector('.follow-button')
		              const popUpMenuContainer = document.querySelector('#open-popup')

		              // console.log(scrollState.top);
		              if (scrollState.top <= 40.390625) {
		                  buttonContainer.style.display = 'block'
		                  popUpMenuContainer.style.display = 'none'
		              } else {
		                  buttonContainer.style.display = 'none'
		                  popUpMenuContainer.style.display = 'block'
		              }
		          }

		          window.onscroll = toggleDetailPanel
		          window.onload = toggleDetailPanel




		          const iconButton = document.querySelectorAll('main nav button')
		          const postSection = document.querySelectorAll('.post_section')

		          // modal functionality of the post section
		          for (const icon of iconButton) {
		              const iconData = icon.getAttribute('data-action')
		              icon.onclick = function() {
		                  event.stopImmediatePropagation()

		                  postSection.forEach(elem => {
		                      elem.style.display = 'none'

		                      iconButton.forEach(icon =>
		                          icon.classList.remove('active'))
		                  })
		                  postSection.forEach(elem => {
		                      const data = elem.getAttribute('data-section-type')
		                      if (data === iconData)
		                          elem.style.display = ' grid'
		                      icon.classList.add('active')
		                  })
		              }
		          }


		      }

		  )()