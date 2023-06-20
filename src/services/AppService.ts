import axios from 'axios';

export class AppService {

	public async getBlogs(): Promise<any> {
		const getBlogs = "https://cdn.madelaboratory.net/wp-json/wp/v2/posts?per_page=100";
		const res = await axios.get(getBlogs);
		return res.data
	}

	public async getBlog(slug: string): Promise<any> {
		const getBlog = "https://cdn.madelaboratory.net/wp-json/wp/v2/posts?slug=";
		const res = await axios.get(getBlog + slug);
		return res.data
	}

	public async getAudio(slug: any): Promise<any> {
		const getAudio = "https://cdn.madelaboratory.net/wp-json/wp/v2/made_speech/";
		const res = await axios.get(getAudio + slug);
		return res.data
	}

	public async getEvents(): Promise<any> {
		const myData = 'https://cdn.madelaboratory.net/wp-json/madeevents/zoho/';
		const response = await axios.get(myData);
		return response.data;
	}

	public async getEventsLocalJSON(): Promise<any> {
		const myData = '/events.json';
		const response = await axios.get(myData);
		return response.data;
	}

	public async getEventByIDJSON(id: any): Promise<any> {
		const myData = `/${id}.json`
		const response = await axios.get(myData);
		return response.data;
	}

	public async getEventPriceLocal(id: any): Promise<any> {
		const myData = `/${id}_price.json`
		const response = await axios.get(myData);
		return response.data;
	}

	public async getEventByID(id: any): Promise<any> {
		const myData = 'https://cdn.madelaboratory.net/wp-json/madeevents/zoho/event/';
		const response = await axios.get(myData + id);
		return response.data;
	}

	public async getEventPrice(id: any): Promise<any> {
		const myData = 'https://cdn.madelaboratory.net/wp-json/madeevents/zoho/eventprice/';
		const response = await axios.get(myData + id);
		return response.data;
	}

}