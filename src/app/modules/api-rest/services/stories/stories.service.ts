import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { INewStory, IStory } from 'src/app/modules/core/interfaces/storyInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class StoriesService implements OnDestroy {

	storiesList: Array<IStory>;
	public storiesList$: BehaviorSubject<Array<IStory>> = new BehaviorSubject([]);
	private url = environment.API + 'stories';

	constructor(private readonly http: HttpClient) {
		this.storiesList$.subscribe(data => {
			this.storiesList = data;
		});
	}

	ngOnDestroy(): void {
		this.storiesList$.unsubscribe();
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

	addStory(token: string, story: INewStory): Observable<any> {
		if (token) {
			return this.http.post(this.url, story);
		}
	}

	private deleteHttp(token: string, id: number): Observable<any> {
		if (token) {
			return this.http.delete(this.url + '/' + id);
		}
	}

	deleteStory(token: string, id: number): Promise<boolean> {
		return new Promise((resolve) => {
			this.deleteHttp(token, id).subscribe(storyResult => {
				if (storyResult.success) {
					const current = this.storiesList.filter(story => story.id !== storyResult.data.id);
					this.storiesList$.next(current);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	}
}
