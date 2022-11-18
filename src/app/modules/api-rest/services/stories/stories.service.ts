import { Injectable } from '@angular/core';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class StoriesService {

	storiesList: Array<IStory>;
	public storiesList$: BehaviorSubject<Array<IStory>> = new BehaviorSubject([]);
	private url = 'https://api-brainstorming.up.railway.app/stories';
	constructor(private readonly http: HttpClient) {
		this.storiesList$.subscribe(data => {
			this.storiesList = data;
		});
	}

	getOneStory(id: number): IStory | false {
		const story = this.storiesList.find(e => e.id === id);
		if (story) {
			return story;
		}
		return false;
	}

	getStoriesByEpicId(id: string): any {
		const list = this.storiesList.filter(story => story.epic === id);
		return list;
	}

	private fetchHttp(token: string): Observable<any> {
		if (token) {
			return this.http.get(this.url)
		}
	}

	fetchStories(): Promise<any> {
		const token = sessionStorage.getItem('token');
		return new Promise((resolve) => {
			this.fetchHttp(token).subscribe(storyResult => {
				if (storyResult.success) {
					this.storiesList$.next(storyResult.data);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
