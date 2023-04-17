import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import LoadingRoom from "@/components/LoadingRoom.vue";
import Room from "@/components/Room.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loading_room",
    meta: {
      title: 'Home Page - Example App'
    },
    name: "LoadingRoom",
    component: LoadingRoom,
  },
  {
    path: "/room",
    meta: {
      title: 'Home Page - Example App'
    },
    name: "Room",
    component: Room,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;