/** @format */

import { writable } from "svelte/store";

export const FeedbackStore = writable([
	{
		id: 1,
		rating: 10,
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugit accusantium eos soluta nulla repellendus. Ex, sit saepe veniam quae labore dolore recusandae quasi enim perferendis ratione ea inventore dolorum!",
	},
	{
		id: 2,
		rating: 9,
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugit accusantium eos soluta nulla repellendus. Ex, sit saepe veniam quae labore dolore recusandae quasi enim perferendis ratione ea inventore dolorum!",
	},
	{
		id: 3,
		rating: 8,
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugit accusantium eos soluta nulla repellendus. Ex, sit saepe veniam quae labore dolore recusandae quasi enim perferendis ratione ea inventore dolorum!",
	},
	{
		id: 4,
		rating: 7,
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugit accusantium eos soluta nulla repellendus. Ex, sit saepe veniam quae labore dolore recusandae quasi enim perferendis ratione ea inventore dolorum!",
	},
]);
