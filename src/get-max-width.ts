import type { Node as YogaNode} from 'yoga-layout/load';
import { getYoga } from './yoga.js';


const getMaxWidth = (yogaNode: YogaNode) => {
	return (
		yogaNode.getComputedWidth() -
		yogaNode.getComputedPadding(getYoga()?.EDGE_LEFT!) -
		yogaNode.getComputedPadding(getYoga()?.EDGE_RIGHT!) -
		yogaNode.getComputedBorder(getYoga()?.EDGE_LEFT!) -
		yogaNode.getComputedBorder(getYoga()?.EDGE_RIGHT!)
	);
};

export default getMaxWidth;
