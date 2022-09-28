import { IEpic } from './epicInterface';
import { IProject } from './projectInterface';
import { IStory } from './storyInterface';

export interface IUrl {
	path: string,
	project: IProject | false,
	epic: IEpic | false,
	story: IStory | false
}
