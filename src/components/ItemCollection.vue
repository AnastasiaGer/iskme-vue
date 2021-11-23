<template>
  <li class="collection-item">
    <div class="collection-item-info">
      <img class="collection-item-img" v-bind:src="'src/assets/collections/' + collection.collectionThumbnail" alt="Collection Photo" />
      <h4 class="collection-item-title">{{collection.collectionTitle}}</h4>
      <button class="btn btn--show-big">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="20px"
          height="20px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z"
              fill="#fff"
            />
          </g>
        </svg>
      </button>
    </div>

    <div class="collection-item-banner">
      <p class="collection-item-microsite">{{collection.micrositeTitle}}</p>
      <p class="collection-item-resources">{{collection.resourcesNumber}} resources</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      required: true
    }
  }
}

</script>

<style>
.collection-item {
  min-width: 271px;
  height: 250px;
  margin-right: 15px;
  background-color: #adb0b6;
  display: block;
  box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.35);
}
.collection-item-title {
  color: #ffffff;
}

.collection-item-info {
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.collection-item-img{
  display: block;
    width: 100%;
    height: 200px;
}
.collection-item-title {
  z-index: 10;
  position: absolute;
  left: 20%;
  bottom: 5px;
}

.collection-item-banner {
  background-color: #ffffff;
  height: 23%;
  text-align: center;
}

.btn--show-big {
  padding: 0;
  border: none;
  position: absolute;
  right: 5%;
  top: 10px;

  display: inline-block;
  width: 33px;
  height: 33px;
  padding: 7px;
  vertical-align: center;
  border-radius: 50%;
  background-color: rgba(247, 246, 243, 0.2);
}

.btn--show-big svg {
  z-index: 100;
}
</style>