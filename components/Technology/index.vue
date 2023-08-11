<template>
  <div class="mb-[32px]">
    <div class="flex md:gap-x-[30px] gap-x-[10px]">
      <NuxtLink to="#">
        <h2 class="font-semibold pb-[12px] hover:text-blue-500 cursor-pointer">
          TECHNOLOGY
        </h2>
      </NuxtLink>
      <div class="flex flex-wrap gap-x-[20px]">
        <NuxtLink to="#">
          <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
            SUB CAT 1
          </h2>
        </NuxtLink>
        <NuxtLink to="#">
          <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
            SUB CAT 2
          </h2>
        </NuxtLink>
        <NuxtLink to="#">
          <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
            SUB CAT 3
          </h2>
        </NuxtLink>
        <NuxtLink to="#">
          <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
            SUB CAT 4
          </h2>
        </NuxtLink>
      </div>
    </div>
    <div class="md:flex grid grid-cols-1 gap-x-[30px]">
      <div class="md:basis-[60%] md:mb-0 mb-[20px]">
        <div>
          <img
            src="/technology1.jpg"
            alt=""
            class="object-cover w-full max-h-[300px]"
          />
          <h3 class="hover:text-blue-500 font-bold text-[20px] mt-[17px]">
            Toyota claims its future EVs will have a range over 600 miles
          </h3>
        </div>
      </div>
      <div class="md:basis-[40%]">
        <TypePost
          image="/technology2.jpg"
          type="TECHNOLOGY"
          desc="Your iPhone and Other Apple Products Are About to Get Easier to Use"
        />
        <TypePost
          image="/technology3.jpg"
          type="TECHNOLOGY"
          desc="iPhone 15: All the Major Rumors on Apple’s Next iPhone"
        />
        <TypePost
          image="/technology4.jpg"
          type="TECHNOLOGY"
          desc="Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice"
          :border="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
