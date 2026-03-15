import Challengelayout from "./layouts/Challengelayout";
import Fitness from "./views/challenge/Fitness";

const routes = [
	{
		path: "/",
		component: (
			<Challengelayout>
				<Fitness />,
			</Challengelayout>
		),
	},
];

export default routes;
