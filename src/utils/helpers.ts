import Moment from 'moment';

export const formatContent = (content: any) => {
	// const media = content.match(/<img(.*)? \/>/g)
	const iframe = content.match(/<iframe(.*)>(.*)<\/iframe>/g)
	let newcontent = content
	if (iframe) {
		iframe.forEach((item: any) => {
			if (item.includes('youtube.com') || item.includes('youtu.be')) {
				newcontent = newcontent.replace(/<iframe/g, '<span class="iframe-container"><iframe class="responsive-iframe"').replace(/<\/iframe>/g, '</iframe></span>')
			}
		})
	}
	// if (media) {
	// 	media.forEach((item: any) => {
	// 		const src = item.match(/src=['"]([^'"]+)['"]/i)
	// 		if (src) {
	// 			const srcUrl = src[0].replace('src="', '').replace('"', '')
	// 			const topwrap = document.createElement('div')
	// 			const wrap = document.createElement('a')
	// 			wrap.setAttribute('class', 'group relative')
	// 			wrap.setAttribute('data-lg-size', '3840-2160')
	// 			wrap.setAttribute('data-src', srcUrl)
	// 			const img = document.createElement('img')
	// 			let nhtml = ''
	// 			img.setAttribute('src', srcUrl)
	// 			img.setAttribute('loading', 'lazy')
	// 			img.setAttribute('class', 'img-fluid')
	// 			wrap.appendChild(img)
	// 			topwrap.appendChild(wrap)
	// 			nhtml = topwrap.innerHTML
	// 			newcontent = newcontent.replace(item, nhtml)
	// 		}
	// 	})
	// }
	return newcontent
}

export const formatDateEvent = (startDate: any, endDate: any, startDateTime: any, endDateTime: any) => {
	// Display Day of week
	let formatDate = '';
	if (Moment(startDate).format('D') === Moment(endDate).format('D')) {
		formatDate = `${Moment(startDateTime.utc).format('ddd - MMM, D - YYYY')}`;
	}
	if (Moment(startDate).format('D') !== Moment(endDate).format('D')) {
		if (Moment(startDate).format('M') < Moment(endDate).format('M')) {
			formatDate = `
			<span>${Moment(startDateTime.utc).format('ddd')}</span><span>${Moment(endDateTime.utc).format('/ddd')}&nbsp;-&nbsp;</span>
			<span>${Moment(startDateTime.utc).format('MMM')}&nbsp;-&nbsp;</span>
			<span>${Moment(startDateTime.utc).format('D')}&nbsp;&</span>
			<span>${Moment(endDateTime.utc).format('MMM')}&nbsp;-&nbsp;</span>
			<span>${Moment(endDateTime.utc).format('D')}&nbsp;-&nbsp;</span>
			<span>${Moment(endDateTime.utc).format('YYYY')}</span>
			`;
		} else {
			formatDate = `
			<span>${Moment(startDateTime.utc).format('ddd')}</span><span>${Moment(endDateTime.utc).format('/ddd')}&nbsp;-&nbsp;</span>
			<span>${Moment(startDateTime.utc).format('MMM')}&nbsp;-&nbsp;</span>
			<span>${Moment(startDateTime.utc).format('D')}&nbsp;&</span>
			<span>${Moment(endDateTime.utc).format('D')}&nbsp;-&nbsp;</span>
			<span>${Moment(endDateTime.utc).format('YYYY')}</span>
			`;
		}
		// <span>${Moment(startDateTime.local).format('HH:mm')}-${Moment(endDateTime.local).format('HH:mm')}</span>		
	}
	return formatDate;
}