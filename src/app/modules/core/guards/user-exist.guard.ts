import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EpicService } from '../../api-rest/services/epics/epic.service';
import { ProjectService } from '../../api-rest/services/projects/project.service';
import { StoriesService } from '../../api-rest/services/stories/stories.service';
import { TasksService } from '../../api-rest/services/tasks/tasks.service';
import { UserService } from '../../api-rest/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class UserExistGuard implements CanActivate {

	constructor(
		private userService: UserService,
		private projectService: ProjectService,
		private epicService: EpicService,
		private storyService: StoriesService,
		private taskService: TasksService,
		private router: Router
	) { }

	OnDestroy(): void {
		this.projectService.projectsList$.unsubscribe();
		this.epicService.epicList$.unsubscribe();
		this.storyService.storiesList$.unsubscribe();
		this.taskService.tasksList$.unsubscribe();
	}

	async canActivate(): Promise<boolean> {
		const token = sessionStorage.getItem('token');
		const id = sessionStorage.getItem('_id');
		if (token && id) {
			const data = await this.initData(id, token)
			if (data) {
				return true;
			} else {
				this.router.navigate(['/login']);
				return false;
			}
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}

	initData(id: string, token: string): Promise<any> {
		return new Promise((resolve) => {
			this.userService.fetchUser(id, token).subscribe(response => {
				if (response._id) {
					this.userService.setUser(response);
					this.projectService.fetchProjects(token).subscribe(res => {
						if (res.success) {
							this.projectService.projectsList$.next(res.data)
							this.epicService.fetchEpics(token).subscribe(epicResponse => {
								if (epicResponse.success) {
									this.epicService.epicList$.next(epicResponse.data);
									this.storyService.fetchStories(token).subscribe(storyResponse => {
										if (storyResponse.success) {
											this.storyService.storiesList$.next(storyResponse.data);
											this.taskService.fetchTasks(token).subscribe(taskResponse => {
												console.log(taskResponse);
												if (taskResponse.success) {
													this.taskService.tasksList$.next(taskResponse.data);
													resolve(true);
												} else {
													resolve(false);
												}
											});
										} else {
											resolve(false);
										}
									});
								} else {
									resolve(false);
								}
							});
						} else {
							resolve(false);
						}
					});
				} else {
					resolve(false);
				}
			});
		});
	}
}
