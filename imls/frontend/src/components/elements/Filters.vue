<template>
  <div class="flex flex-col justify-between bg-white">
    <h5 class="text-base font-bold">Filters</h5>
    <form>
      <ul>
        <li>
          <p class="font-semibold text-16px text-black relative pointer">Material types</p>
          <div class="flex flex-col flex-nowrap mt-10px">
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Courses (2)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Textbooks (3)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Modules (3)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Readings (1)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Activity/lab (1)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Lecture (1)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Syllabus (1)
              </label>
            </div>
          </div>
        </li>

        <li class>
          <p class="font-semibold text-16px text-black relative pointer">License types</p>

          <div class="flex flex-col flex-nowrap mt-ss">
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <p>Unrestricted use</p>
                <input type="checkbox" />
                CC BY (8)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <p>Conditional Share and Remix Permitted</p>
                <input type="checkbox" />
                CC BY-NC (1)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <p>Only Sharing Permitted</p>
                <input type="checkbox" />
                CC BY-ND (1)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <p>Read the Fine Print</p>
                <input type="checkbox" />
                Education Use Permitted (2)
              </label>
            </div>
          </div>
        </li>

        <li class>
          <p class="font-semibold text-16px text-black relative pointer">Accessibility</p>
          <div class="flex flex-col flex-nowrap mt-ss">
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Accessible (3)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Partially Accessible (5)
              </label>
            </div>
            <div class="mb-10px">
              <label class="text-10px text-black pointer">
                <input type="checkbox" />
                Not Evaluated (4)
              </label>
            </div>
          </div>
        </li>

        <!-- <li class>
          <p class="font-semibold text-16px text-black relative pointer">Publication/Update Date</p>
          <VueSimpleRangeSlider
            style="width: 300px"
            :min="0"
            :max="2000"
            :logarithmic="true"
            v-model="range"
            activeBarColor="#1c62cd"
          />
        </li>-->
      </ul>
    </form>
  </div>
</template>

<script>
// import VueSimpleRangeSlider from 'vue-simple-range-slider';
// import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

export default {
  name: 'Filters',
  props: ["database"],
  // components: {
  //   VueSimpleRangeSlider,
  // },
  // data() {
  //   return {
  //     range: [20, 1900],
  //   }
  // },
};
</script>

<style lang="postcss">
</style>