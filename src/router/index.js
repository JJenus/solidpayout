import { createRouter, createWebHistory } from "vue-router";

import Landing from "../views/Landing.vue";

import AppView from "../views/App.vue";
import Picks from "../views/app/Picks.vue";
import Plans from "../views/app/Plans.vue";
import Profile from "../views/app/Profile.vue";
import Security from "../views/app/Security.vue";
// ADMIN
import Admin from "../views/Admin.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Users from "../views/admin/Users.vue";
import Testimonies from "../views/admin/Testimonies.vue";
import Subscriptions from "../views/admin/Subscriptions.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "landing",
			component: Landing,
		},
		{
			path: "/app",
			name: "app",
			component: AppView,
			redirect: "/app/picks",
			children: [
				{
					path: "picks",
					name: "picks",
					component: Picks,
				},
				{
					path: "plans",
					name: "plans",
					component: Plans,
				},
				{
					path: "profile",
					name: "profile",
					component: Profile,
				},
				{
					path: "security",
					name: "security",
					component: Security,
				},
			],
		},

		{
			path: "/admin",
			name: "admin",
			component: Admin,
			redirect: "/admin/dashboard",
			children: [
				{
					path: "dashboard",
					name: "dashboard",
					component: Dashboard,
				},
				{
					path: "subscriptions",
					name: "subscriptions",
					component: Subscriptions,
				},
				{
					path: "users",
					name: "users",
					component: Users,
				},
				{
					path: "testimonies",
					name: "testimonies",
					component: Testimonies,
				},
			],
		},
	],
});

export default router;
