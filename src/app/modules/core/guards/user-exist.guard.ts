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
			const result = await Promise.all([
				this.userService.fetchUser(id),
				this.userService.fetchAllUsers(),
				this.projectService.fetchProjects(),
				this.epicService.fetchEpics(),
				this.storyService.fetchStories(),
				this.taskService.fetchTasks()
			])
			const data = result.some(value => value === false);
			if (!data) {
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
}
