import { IEpic } from './epicInterface';
import { IProject } from './projectInterface';
import { IStory } from './storyInterface';

export interface IUrl {
	path: string,
	project?: IProject,
	epic?: IEpic,
	story?: IStory
}
