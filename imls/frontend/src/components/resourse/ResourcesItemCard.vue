<template>
  <router-link :to="{ name: 'course' }" class="hover:text-current hover:no-underline">
    <li
      class="shadow-md m-w-resource h-card mb-15px px-4 py-2 bg-white block rounded-md flex flex-nowrap justify-between"
    >
      <div class="w-4/5 px-2 py-2">
        <p>{{ course.site }}</p>
        <div class>
          <label class="text-blue-800 font-bold text-16px mb-10px">
            <input class type="checkbox" />
            {{ course.courseTitle }}
          </label>
        </div>
        <p class="font-bold">Updated {{ course.updated }}</p>
        <div class="flex w-1/12 flex-nowrap justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
              fill="green"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
              fill="green"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
              fill="green"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
              fill="green"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
              fill="green"
            />
          </svg>
        </div>
        <p class="text-blue-800 font-bold">( {{ course.reviews }} )</p>
        <p class="font-bold">
          Subject:
          <span class="font-normal">{{ course.subject }}</span>
        </p>
        <p class="font-bold">
          Level:
          <span class="font-normal">{{ course.level }}</span>
        </p>
        <div class="flex flex-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M23 14v-2H9v2h5v2.734l-3.868 6.77l1.736.992L15.58 18h.84l3.712 6.496l1.736-.992L18 16.734V14h5z"
              fill="currentColor"
            />
            <circle cx="16" cy="9" r="2" fill="currentColor" />
            <path
              d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4z"
              fill="currentColor"
            />
          </svg>
          {{ course.accessibility }}
        </div>
        <p class="font-bold">
          Overview:
          <span class="font-normal">{{ course.overview }}</span>
          <a href="#" class="text-blue-800 font-bold">Read More</a>
        </p>
      </div>

      <div class="w-1/5 px-2 py-2">
        <div class="font-bold items-center mb-25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="50px"
            height="50px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" />
              <path
                d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2z"
              />
            </g>
          </svg>
          Full Course
        </div>
        <div class="bold">
          License Type:
          <span class="font-normal mb-20px">{{ course.licenseType }}</span>
        </div>
        <div class="flex flex-nowrap bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="16px"
            height="16px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M16 3C8.855 3 3 8.855 3 16s5.855 13 13 13s13-5.855 13-13S23.145 3 16 3zm0 2c6.055 0 11 4.945 11 11s-4.945 11-11 11S5 22.055 5 16S9.945 5 16 5zm0 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 5c-1.7 0-3 1.3-3 3v3l1 1v4h4v-4l1-1v-3c0-1.7-1.3-3-3-3z"
              fill="currentColor"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="16px"
            height="16px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M15.975.5C24.837.5 31.5 7.381 31.5 16c0 9.194-7.406 15.5-15.525 15.5C7.6 31.5.5 24.656.5 16C.5 7.694 7.044.5 15.975.5zm.05 2.794C8.638 3.294 3.294 9.413 3.294 16c0 6.863 5.7 12.675 12.731 12.675c6.45 0 12.675-5.069 12.675-12.675c.006-7.113-5.637-12.706-12.675-12.706zM9.106 13.813c.813-5.244 5.031-5.981 6.806-5.981c6.237 0 7.969 5.156 7.969 8.387c0 3.975-2.563 8.306-8.056 8.306c-2.431 0-6.194-1.25-6.837-6.063h3.906c.094 1.881 1.225 2.825 3.406 2.825c1.456 0 3.625-1.138 3.625-5.175c0-5.156-3.069-5.038-3.544-5.038c-2.069 0-3.232.913-3.488 2.738h1.137l-3.075 3.075l-3.063-3.075z"
              fill="currentColor"
            />
          </svg>
          <span class="font-normal">CC BY-SA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="16px"
            height="16px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <circle fill="#2196F3" cx="24" cy="24" r="21" />
            <path fill="#fff" d="M22 22h4v11h-4z" />
            <circle fill="#fff" cx="24" cy="16.5" r="2.5" />
          </svg>
        </div>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}

</script>

<style>
</style>