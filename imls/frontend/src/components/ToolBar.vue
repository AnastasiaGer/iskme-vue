<template>
  <div class="mt-0 mr-8">
    <div class="bg-white rounded overflow-hidden shadow-lg">
      <div class="text-center p-6 border-b">
        <img
          class="h-24 w-24 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/women/24.jpg"
          alt="Random Dude"
        />
        <p class="pt-2 text-lg font-semibold">Random Dudette</p>
        <p class="text-sm text-gray-600">random.dudette@example.com</p>
        <div class="mt-5">
          <a
            href="#"
            class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
          >Manage your Account</a>
        </div>
      </div>
      <div class="border-b">
        <router-link :to="{ name: 'search' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Search</p>
            <p class="text-xs text-gray-500">Search for resources/collections</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'home' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Home</p>
            <p class="text-xs text-gray-500">Home is ...</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'my-library' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">My Library</p>
            <p class="text-xs text-gray-500">My Stuff</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'browse' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Browse</p>
            <p class="text-xs text-gray-500">Meander through stuff</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'browse-collections' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Browse collections</p>
            <p class="text-xs text-gray-500">...</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'map' }" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Mappings</p>
            <p class="text-xs text-gray-500">Manage taxonomy mappings</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'settings' }" href="#" class="px-4 py-2 hover:bg-gray-100 flex">
          <div class="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="pl-3">
            <p class="text-sm font-medium text-gray-800 leading-none">Settings</p>
            <p class="text-xs text-gray-500">Preferences, ...</p>
          </div>
        </router-link>
      </div>

      <div class>
        <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
          <p class="text-sm font-medium text-gray-800 leading-none">My Site</p>
        </a>
        <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
          <p class="text-sm font-medium text-gray-800 leading-none">Django</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
</style>
